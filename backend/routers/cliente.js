import { Router } from "express";
import { confiGET } from "../limit/limit.js";
import { middle_Verify_cliente, DTO_data_cliente } from "../middleware/cliente.js";
import { 
    getClientes,
    getCliente_DNI,
    getCliente_Alquiler
} from "../controllers/clientes.js";


const clientes = Router();

clientes.get('/', confiGET(), getClientes);
clientes.get('/dni=:id', confiGET(), getCliente_DNI, middle_Verify_cliente);
clientes.get('/alquiler', confiGET(), getCliente_Alquiler, middle_Verify_cliente);


export default clientes