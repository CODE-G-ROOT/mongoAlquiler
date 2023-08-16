import { Router } from "express";
import { confiGET } from "../limit/limit.js";
import { middle_Verify_Automovil, DTO_data_automovil } from "../middleware/automovil.js";

import { 
    getAuomoviles_Modelo_Marca,
    getAutomoviles_Alquiler,
    getAuomoviles_QT,
    getAuomoviles_LT,
    getAutomoviles
} from "../controllers/automoviles.js";

const automovil = Router();

automovil.get('/', confiGET() ,getAutomoviles);
automovil.get('/disponibles', confiGET() ,getAutomoviles_Alquiler, middle_Verify_Automovil);
automovil.get('/capacidad/qte=:id', confiGET(), getAuomoviles_QT, middle_Verify_Automovil);
automovil.get('/capacidad/lte=:id', confiGET(), getAuomoviles_LT, middle_Verify_Automovil);
automovil.get('/modelo_marca', confiGET(), getAuomoviles_Modelo_Marca, middle_Verify_Automovil);

export default automovil;