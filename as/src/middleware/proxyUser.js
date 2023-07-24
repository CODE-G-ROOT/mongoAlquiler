import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {User} from '../controller/user.js';
import {validate} from 'class-validator';

const proxyUser = express();
proxyUser.use(async(req,res,next)=>{
    try {
        let data = plainToClass(User, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(`<img style="text-aling='center'" title="${err.message}" src="https://http.cat/${err.status}" />`);
    }
})

export default proxyUser;