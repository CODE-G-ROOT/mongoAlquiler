import dotenv from 'dotenv';
import express, { application } from 'express';

import { token, verify } from "./limit/token.js";
import alquiler from './routers/alquiler.js';
import clientes from './routers/cliente.js';
import automovil from './routers/automovil.js';
import empleados from './routers/empleado.js';
import reservas from './routers/reseva.js';
import sucursal_automovil from './routers/sucursal_automovil.js';

console.clear();
dotenv.config();

const app = express();

app.use(express.json());
app.use("/alquiler",verify, alquiler  ); //? COMPLETE
app.use("/automoviles", verify, automovil ); //? COMPLETE
app.use("/clientes", verify, clientes );  //? COMPLETE
app.use("/empleados", verify, empleados );  //? COMPLETE
app.use("/reservas", verify, reservas ); //? COMPLETE
app.use("/sucursal-automovil", verify, sucursal_automovil ); //? COMPLETE
app.use("/token", token);

const server_config = JSON.parse(process.env.SERVER_CONFIG);
app.listen( server_config, ()=>{
    console.log(
        `http://${server_config.hostname}:${server_config.port}/`
    )
})