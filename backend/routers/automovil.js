import { Router } from "express";
import { confiGET } from "../middleware/limit.js";
import { 
    getAutomoviles_Alquiler,
    getAuomoviles_QT,
    getAuomoviles_LT,
    getAuomoviles_Modelo_Marca
} from "../controllers/automoviles.js";

const automovil = Router();

automovil.get('/disponibles', confiGET() ,getAutomoviles_Alquiler);
automovil.get('/capacidad/qte=:id', confiGET(), getAuomoviles_QT);
automovil.get('/capacidad/lte=:id', confiGET(), getAuomoviles_LT);
automovil.get('/modelo_marca', confiGET(), getAuomoviles_Modelo_Marca);

export default automovil;