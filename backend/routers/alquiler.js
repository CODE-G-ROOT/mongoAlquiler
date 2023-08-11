import { Router } from "express";
import { confiGET } from "../middleware/limit.js";

import { 
    getAlquileres,
    getAlquileres_cliente,
    getAlquileres_costo_total,
    getAlquileres_fecha,
    getAlquileres_fechas,
    getAlquileres_id,
    getAlquileres_actives 
} from "../controllers/alquiler.js";

const alquiler = Router();

alquiler.get("/", confiGET(), getAlquileres);
alquiler.get("/search=:id", confiGET(), getAlquileres_id);
alquiler.get("/search-estado=:sts", confiGET(), getAlquileres_actives);
alquiler.get("/search-costo_total=:id", confiGET(), getAlquileres_costo_total);
alquiler.get("/search-fechas=Punto_21", confiGET(), getAlquileres_fechas);
alquiler.get("/search-fechas=Punto_12", confiGET(), getAlquileres_fecha);
alquiler.get("/search-cliente", confiGET(), getAlquileres_cliente);

export default alquiler;
