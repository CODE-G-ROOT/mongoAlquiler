import { Router } from "express";
import { confiGET } from "../limit/limit.js";
import { get_sucursal_automovil } from "../controllers/sucursal_automovil.js";
import { middle_Verify_sucursal_automovil, DTO_data_sucursal_automovil } from "../middleware/sucursal_automovil.js";

const sucursal_automovil = Router();

sucursal_automovil.get('/', confiGET(), get_sucursal_automovil, middle_Verify_sucursal_automovil)

export default sucursal_automovil;