import {Router} from 'express';
import proxyUser from '../middleware/proxyUser.js';
const appCliente = Router();

appCliente.get("/", proxyUser, (req,res)=>{
    res.send(JSON.stringify(req.body));
})

export default appCliente;