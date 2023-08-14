import { Router } from "express";
import { confiGET } from "../middleware/limit.js";
import { get_sucursal_automovil } from "../controllers/sucursal_automovil.js";

const sucursal_automovil = Router();

sucursal_automovil.get('/', confiGET(), get_sucursal_automovil)

export default sucursal_automovil;