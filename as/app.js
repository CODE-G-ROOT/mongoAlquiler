import express from "express";
import appCliente from './routers/cliente.js';
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/campus", appCliente);
const config = {
  hostname: "127.10.16.15",
  port: 5020
};
appExpress.listen(config, ()=>{
  console.log(`http://${config.hostname}:${config.port}`);
})