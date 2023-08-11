import { Router, json } from "express";
import { confiGET } from "../middleware/limit.js";
import db from "../connection/mongo.js";
import { ObjectId } from "mongodb";

const alquiler = Router();
// const tamaño = express.json({ limit: '100KB' })

//? CHECK
alquiler.get("/alquiler", confiGET(), async (req, res) => {
  try {
    let collection = await db.collection("alquiler");
    let results = await collection.find({})
      .limit(50)
      .toArray();
    console.log(req.rateLimit);
    res.send(results).status(200)
  } catch (error) {

  }

});

//? CHECK
//Obtener el costo total de un alquiler específico.
alquiler.get("/?search=:id", confiGET(), async (req, res) => {
  try {
    let collection = await db.collection("alquiler");
    let query = {
      _id: new ObjectId(req.params.id)
    }

    let results = await collection.find(query).limit(50).toArray();

    if (results.length === 0) {
      res.status(404).send('Alquiler Not Found')
    }
    res.status(200).send(results);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

//? CHECK
//Listar todos los alquileres activos junto con los datos de los clientes relacionados.
//! preguntarle a miguel, por qué no sirve si el endpoint es: /alquiler/search/?estado=:sts
//! Sirve pero la url pero toma la dirección del primer endpoint /alquiler/?search_estado=:sts
alquiler.get("/?search-estado=:sts", confiGET(), async (req, res) => {
  try {
    let collection = await db.collection("alquiler");
    let query = {
      Estado: req.params.sts
    };
    query = query.Estado;

    if (query === ":Activo" || query === ":Disponible") {
      query = query.substring(1)
      console.log(query);
    }

    if (query === "Activo" || query === "Disponible") {
      let results = await collection.aggregate([
        {
          $lookup: {
            from: "registro_entrega",
            localField: "ID_Alquiler",
            foreignField: "ID_Alquiler",
            as: "registro_entrega",
          },
        },
        {
          $unwind: "$registro_entrega",
        },
        {
          $lookup: {
            from: "automovil",
            localField: "ID_Automovil",
            foreignField: "ID_Automovil",
            as: "automovil",
          },
        },
        {
          $unwind: "$automovil",
        },
        {
          $lookup: {
            from: "cliente",
            localField: "ID_Cliente",
            foreignField: "ID_Cliente",
            as: "cliente",
          },
        },
        {
          $unwind: "$cliente",
        },
        {
          $lookup: {
            from: "empleado",
            localField: "registro_entrega.ID_Empleado",
            foreignField: "ID_Empleado",
            as: "empleado",
          },
        },
        {
          $unwind: "$empleado",
        },
        {
          $match: {
            Estado: query,
          },
        },
        {
          $group: {
            _id: "$ID_Alquiler",
            ID_Cliente: { $first: "$ID_Cliente" },
            ID_Automovil: { $first: "$ID_Automovil" },
            Fecha_Inicio: { $first: "$Fecha_Inicio" },
            Fecha_Fin: { $first: "$Fecha_Fin" },
            Teléfono: { $first: "$Teléfono" },
            Estado: { $first: "$Estado" },
            registro_entrega: { $addToSet: "$registro_entrega" },
            automovil: { $addToSet: "$automovil" },
            cliente: { $addToSet: "$cliente" },
            empleado: { $addToSet: "$empleado" },
          },
        },
        {
          $project: {
            ID_Cliente: 1,
            ID_Automovil: 1,
            Fecha_Inicio: 1,
            Fecha_Fin: 1,
            Teléfono: 1,
            Estado: 1,
            registro_entrega: {
              _id: 1,
              ID_Alquiler: 1,
              Fecha_Entregado: 1,
              Combustible_Entregado: 1,
              Kilometraje_Entregado: 1,
            },
            automovil: 1,
            cliente: 1,
            empleado: {
              _id: 1,
              ID_Empleado: 1,
              Nombre: 1,
              Apellido: 1,
              Telefono: 1,
              Cargo: 1,
            },
          },
        },
        {
          $sort: {
            ID_Alquiler: 1,
          },
        },
      ]).toArray();
      console.log(req.rateLimit);
      res.status(200).send(results)
    }
    else {
      res.status(404).send("Status Not Found")
    }
  } catch (error) {
    console.error(error);
  }
});

//TODO QUEDA PENDIENTE MODIFICAR LA BASE DE DATOS CON LOS INSERTS, POR AHORA SOLO
//TODO SE CONFIGURARÁN LOS ENDPOINTS, YA LUEGO SE CONFIGURARÁ LA BASE DE DATOS
//Obtener el costo total de un alquiler específico. 
// alquiler.get("/alquiler?costo_total:id", confiGET(), async (req, res) => {
//   let collection = await db.collection("alquiler");
//   let query = {
//     _id: new ObjectId(req.params.id)
//   }
//   let results = await collection.find()
//     .limit(50)
//     .toArray();;

//   console.log(req.rateLimit);
//   res.send(results).status(200)
// });

//? CHECK
//Listar los alquileres con fecha de inicio entre '2023-08-01' y '2023-09-30'.
alquiler.get("/?search-fechas=Punto_21", confiGET(), async (req, res) => {
  try {

    let collection = await db.collection('alquiler');
    const inicio = new Date("2023-08-01T00:00:00Z")
    const fin = new Date("2023-09-30T00:00:00Z")

    if ((inicio = '') || (fin = '')) res.status(404).send("Query Not Found")

    let results = await collection.find({
      Fecha_Inicio: {
        $gte: inicio
      },
      Fecha_Fin: {
        $lte: fin
      }
    });

    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.send(204)
  }
})

alquiler.get("/?search-fechas=Punto_12", confiGET(), async (req, res) => {
  try {

    let collection = await db.collection('alquiler');
    const fecha = new Date("2023-08-01T00:00:00Z")

    if (fecha = '') res.status(404).send("Query Not Found")

    let results = await collection.find({
      Fecha_Inicio: { $gte: Fecha_Inicio }
    });

    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.send(204)
  }
})

alquiler.get("/?search-cliente", confiGET(), async (req, res) => {
  try {
    let collection = await db.collection("alquiler");
    let results = await collection.find({});

    if (results != '') res.send(204).send("Query without conent")

    res.status(200).send(results);
  } catch (error) {
    console.log(error);
    res.status(404).send("Query Not Found or Empty");
  }
})



export default alquiler;