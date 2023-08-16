import { Router } from "express";
import { confiGET } from "../limit/limit.js";
import { middle_Verify_reserva, DTO_data_reserva } from "../middleware/reserva.js";
import { 
    get_reservas,
    get_reservas_estado, 
    get_reservas_estado_cliente,
} from "../controllers/reserva.js";

const reservas = Router();

reservas.get('/', confiGET(), get_reservas);
reservas.get('/estado=:sto', confiGET(), get_reservas_estado, middle_Verify_reserva);
reservas.get('/estado=:sto/cliente=:id', confiGET(), get_reservas_estado_cliente, middle_Verify_reserva);

export default reservas;