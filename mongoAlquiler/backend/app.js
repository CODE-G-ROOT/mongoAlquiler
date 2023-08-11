import dotenv from 'dotenv';
import express, { application } from 'express';
import alquiler from './routers/alquiler.js';

console.clear();
dotenv.config();

const app = express();

//Alquiler
app.get("/alquiler", alquiler);




// app.post("/campus", appCampus);

const server_config = JSON.parse(process.env.SERVER_CONFIG);
app.listen( server_config, ()=>{
    console.log(
        `http://${server_config.hostname}:${server_config.port}/`
    )
})