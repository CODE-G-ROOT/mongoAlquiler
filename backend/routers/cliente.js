import { Router } from "express";
import { confiGET } from "../middleware/limit.js";

import { getClientes } from "../controllers/clientes.js";


const clientes = Router();

clientes.get('/', confiGET(), getClientes);


export default clientes