import { plainToClass, classToPlain } from 'class-transformer';
import { validate } from 'class-validator';
import { DTO } from '../limit/token.js';
import { Router } from 'express';
import 'reflect-metadata';

const middle_Verify_cliente = Router()
const DTO_data_cliente = Router()

middle_Verify_cliente.use((req, res, next)=>{
    if(!req.rateLimit) return;

    let { payload } = req.data;
    const { ait, exp, ...newPayload } = payload;
    payload = newPayload;

    console.log({payload});

    let Clone = JSON.stringify( classToPlain( plainToClass( DTO("cliente").class, {}, { ignoreDecorators: true})));
    console.log(Clone);

    let Verify = Clone === JSON.stringify(payload);
    req.data = undefined; 

    (!Verify) 
        ? res.status(406).send({ status: 401, message: "Not autorized", reference: "https://http.cat/401"})
        : next()
});

DTO_data_cliente.use( async (req,res, next)=>{
    try {
        let data = plainToClass(DTO("cliente").class, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();

    } catch (error) {
        res.status(error.status).send(error);
    }
})

export { middle_Verify_cliente, DTO_data_cliente } 
