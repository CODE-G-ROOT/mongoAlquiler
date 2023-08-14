import { Router } from "express";
import { confiGET } from "../middleware/limit.js";

import { 
    getClientes,
    getCliente_DNI,
    getCliente_Alquiler
} from "../controllers/clientes.js";


const clientes = Router();

clientes.get('/', confiGET(), getClientes);
clientes.get('/dni=:id', confiGET(), getCliente_DNI);
clientes.get('/alquiler', confiGET(), getCliente_Alquiler);


export default clientes