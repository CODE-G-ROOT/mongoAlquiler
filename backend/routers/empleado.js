import { Router } from "express";
import { confiGET } from "../limit/limit.js";
import { middle_Verify_empleado, DTO_data_empleado } from "../middleware/empleado.js";
import { get_empleados, get_empleados_cargo } from "../controllers/empleado.js";

const empleados = Router();

empleados.get('/', confiGET(), get_empleados);
empleados.get('/cargo=:cg', confiGET(), get_empleados_cargo, middle_Verify_empleado);

export default empleados;