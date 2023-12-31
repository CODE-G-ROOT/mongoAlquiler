import 'reflect-metadata';
import dotenv from 'dotenv';

import { plainToClass, classToPlain } from 'class-transformer';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';

import { Alquiler } from '../DTO/alquiler.js';
import { Automovil } from '../DTO/automovil.js';
import { Cliente } from '../DTO/cliente.js';
import { Empleado } from '../DTO/empleado.js';
import { Reserva } from '../DTO/reserva.js';
import { Sucursal_Automovil } from '../DTO/sucursal_automovil.js';

dotenv.config("../");
const token = Router();
const verify = Router();

const DTO = (p1) => {
    const match = {
        "alquiler" : Alquiler,
        "automovil" : Automovil,
        "cliente" : Cliente,
        "empleado" : Empleado,
        "reserva" : Reserva,
        "sucursal_automovil" : Sucursal_Automovil,
        'mongo': Error
    };

    const inst = match[p1];
    if(!inst) throw {status: 404, message: "Token invalid"}
    return { atributos: plainToClass(inst, {}, { ignoreDecorators: true }), class: inst}
};

token.use("/:collecion", async(req,res)=>{
    try {
        let inst = DTO(req.params.collecion).atributos;
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
            .setProtectedHeader({alg:"HS256", typ: "JWT"})
            .setIssuedAt()
            .setExpirationTime("30m")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        res.status(201).send({status: 201, message: jwt});

    } catch (error) {
        res.status(error.status).send(error);
    }
})

verify.use("/", async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(498).send({status: 498, token: "Invalid Token", reference: "https://http.cat/498"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({status: 498, token: "Token caducado", reference: "https://http.cat/498"});
    }
})

export {
    token,
    verify,
    DTO
}