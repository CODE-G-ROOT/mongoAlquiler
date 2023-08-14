import { Router } from "express";
import { confiGET } from "../middleware/limit.js";

import { 
    get_empleados,
    get_empleados_cargo
} from "../controllers/empleado.js";

const empleados = Router();

empleados.get('/', confiGET(), get_empleados);
empleados.get('/cargo=:cg', confiGET(), get_empleados_cargo);

export default empleados;