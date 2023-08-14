import { Router } from "express";
import { confiGET } from "../middleware/limit.js";

import { get_reservas_estado, get_reservas } from "../controllers/reserva.js";

// import 

const reservas = Router();

reservas.get('/', confiGET(), get_reservas);
reservas.get('/estado=:sto', confiGET(), get_reservas_estado);

export default reservas;