import dotenv from 'dotenv';
import express, { application } from 'express';

import alquiler from './routers/alquiler.js';
import clientes from './routers/cliente.js';
import automovil from './routers/automovil.js';
import empleados from './routers/empleado.js';
import reservas from './routers/reseva.js';

console.clear();
dotenv.config();

const app = express();

app.use("/alquiler", alquiler); //? COMPLETE
app.use("/automoviles", automovil) //? COMPLETE
app.use("/clientes", clientes)  //? COMPLETE
app.use("/empleados", empleados)  //? COMPLETE
app.use("/reservas", reservas ) //? COMPLETE

const server_config = JSON.parse(process.env.SERVER_CONFIG);
app.listen( server_config, ()=>{
    console.log(
        `http://${server_config.hostname}:${server_config.port}/`
    )
})