import { Router } from "express";
import { confiGET } from "../middleware/limit.js";
// import queryBoolean from "express-query-boolean";

import { 
    get_reservas,
    get_reservas_estado, 
    get_reservas_estado_cliente,
} from "../controllers/reserva.js";

// import 

const reservas = Router();

reservas.get('/', confiGET(), get_reservas);
reservas.get('/estado=:sto', confiGET(), get_reservas_estado);
reservas.get('/estado=:sto/cliente=:id', confiGET(), get_reservas_estado_cliente);

export default reservas;