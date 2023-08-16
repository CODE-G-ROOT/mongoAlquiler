import { Router } from "express";
import { confiGET } from "../limit/limit.js";
import { middle_Verify_Alquiler, DTO_data_alquiler } from "../middleware/alquiler.js";
import { 
    getAlquileres,
    getAlquileres_cliente,
    getAlquileres_costo_total,
    getAlquileres_fecha,
    getAlquileres_fechas,
    getAlquileres_id,
    getAlquileres_actives, 
    postAlquileres,
    postManyAlquileres,
    putAlquiler
} from "../controllers/alquiler.js";


const alquiler = Router();

alquiler.get("/", confiGET(), getAlquileres);
alquiler.get("/search=:id", confiGET(), getAlquileres_id, middle_Verify_Alquiler);
alquiler.get("/search-estado=:sts", confiGET(), getAlquileres_actives, middle_Verify_Alquiler);
alquiler.get("/search-costo_total=:id", confiGET(), getAlquileres_costo_total, middle_Verify_Alquiler);
alquiler.get("/search-start_date=:inicio&end_date=:fin", confiGET(), getAlquileres_fechas, middle_Verify_Alquiler);
alquiler.get("/search-fechas=Punto_12", confiGET(), getAlquileres_fecha, middle_Verify_Alquiler);
alquiler.get("/search-cliente", confiGET(), getAlquileres_cliente, middle_Verify_Alquiler);

alquiler.post("/", confiGET(), postAlquileres, DTO_data_alquiler);
alquiler.post("/many", confiGET(), postManyAlquileres, DTO_data_alquiler);

alquiler.put("/:id", confiGET(), putAlquiler, DTO_data_alquiler);
alquiler.put("/many", confiGET(), postManyAlquileres, DTO_data_alquiler);

export default alquiler;
