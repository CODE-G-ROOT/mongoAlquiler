import { Router } from "express";
import { confiGET } from "../middleware/limit.js";

import { getAutomoviles_Alquiler } from "../controllers/automoviles.js";

const automovil = Router();

automovil.get('/disponibles', confiGET() ,getAutomoviles_Alquiler);
automovil.get('/capacidad/qt=:data', confiGET);

export default automovil;