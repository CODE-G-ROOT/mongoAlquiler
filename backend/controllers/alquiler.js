import db from "../connection/mongo.js";
import { ObjectId } from "mongodb";

//* GET
export async function getAlquileres(req, res) {

    try {
        
        let collection = await db.collection("alquiler");
        let results = await collection.find({})
            .limit(50)
            .toArray();

        results > 0
            ? res.send(results).status(200)
            : res.status(204).send({ status: 204, message: "Found But Without Not Contain" })

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
        res.status(404).send("Query Not Found")
    }
}

export async function getAlquileres_id(req, res) {
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
}

export async function getAlquileres_actives(req, res) {
    try {
        let collection = await db.collection("alquiler");
        let query = {
            Estado: req.params.sts
        };

        query = query.Estado;

        //valida los dos puntos
        if (query == ":Activo" || query == ":Disponible") {
            return res.status(404).send({
                error: 404,
                message: 'Query Not Found',
                correcttion: query.substring(1)
            }
        )}

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
            return res.status(200).send(results)
        }

        else {
            res.status(404).send({
                status: 404,
                message: `${query} Not Found`,
                example: "seach-estado=['opcion']"
            })
            /* OPTIONAL */
            // res.status(404).send(`
            // <html>
            //  <head>
            //      <title>Error</title>
            //  </head>
            //  <body>
            //     <img src="https://http.cat/["ERROR"]>
            //  </body>
            // </html>
            // `)
        }
    } catch (error) {
        console.error({
            error: error,
            message: error.message
        });
        /* OPTIONAL */
        // console.error({`
            //<html>
            //  <head>
            //      <title>Error</title>
            //  </head>
            //  <body>
            //     <img src="https://http.cat/${error}>
            //  </body>
            // </html>`
        // });
    }
}

export async function getAlquileres_costo_total(req, res) {
    try {
        let collection = await db.collection("alquiler");
        let query = {
            _id: new ObjectId(req.params.id)
        }

        let results = await collection.find(query).limit(50).toArray();

        console.log(req.rateLimit);
        res.send(results).status(200)
    } catch (error) {
        console.error(error);
        res.status(404).send({
            status: 404,
            message: "Query not Found"
        })
    }
}

export async function getAlquileres_fechas(req, res) {
    let data = undefined;
    try {

        let collection = await db.collection('alquiler');
        let query = {
            inicio : req.params.inicio,
            fin: req.params.fin
        }
        
        data = query;

        if (query.inicio.length > 10) return fecha_inicio = query.inicio.substring(1);
        if (query.fin.length > 10) return fecha_fin = query.fin.substring(1);

        const inicio = new Date(`${query.inicio}T00:00:00Z`);
        const fin = new Date(`${query.fin}T00:00:00Z`);

        let results = await collection.find({
            Fecha_Inicio: {
                $gte: inicio
            },
            Fecha_Fin: {
                $lte: fin
            }
        }).toArray();

        if ((inicio == '') || (fin == '')) return res.status(404).send("Query Not Found");
        if (results.length === 0) return res.status(204).send("Query Not Found");
        if (results.length > 0) return res.status(200).send(results);
        else res.status(204).send("Not Content")

    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: error,
            message: error.message,
            date_format: "YYYY-MM-DD",
            example: "2023-01-01",
            data : data
            
        });

    }
}

export async function getAlquileres_fecha(req, res) {
    try {

        let collection = await db.collection('alquiler');
        const fecha = new Date("2023-08-01T00:00:00Z")

        if (fecha === '') return res.status(404).send("Query Not Found");

        let results = await collection.find({
            Fecha_Inicio: { $gte: fecha }
        }).toArray();

        res.status(200).send(results);
    } catch (error) {
        console.error({
            error: error,
            message: error.message
        });
        res.status(204).send('Not Found')
    }
}

export async function getAlquileres_cliente(req, res) {
    {
        try {
            let collection = await db.collection("alquiler");
            let results = await collection.find({}).toArray();

            if (results === '') res.send(204).send("Query without conent")

            res.status(200).send(results);
        } catch (error) {
            console.log(error);
            res.status(404).send("Query Not Found or Empty");
        }
    }
}


//* POST
export async function postAlquileres(req,res){
    try {
        
        let collection = await db.collection("alquiler");
        let query = {
            ...req.body,
            Fecha_Inicio: new Date (req.body.Fecha_Fin),
            Fecha_Fin: new Date (req.body.Fecha_fin)
        }
        let results = await collection.insertOne(query);

        results.length > 0
            ? res.status(202).send("Accept Sucessful")
            : res.status(406).send({error: 406, message: "Insert not found"})

    } catch (error) {
        res.status(500).send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500",
            type: TypeError,
            SyntaxError: SyntaxError,
            ReferenceError: ReferenceError
        })
    }
}

export async function postManyAlquileres(req,res){

    try {
        let collection = db.collection('alquiler');
        let query = {
            ...req.body,
            Fecha_Inicio: new Date (req.body.Fecha_Fin),
            Fecha_Fin: new Date (req.body.Fecha_fin)
        }
        let results = collection.insertMany([query]);

        results.length > 0
            ? res.status(202).send("Accept Sucessful")
            : res.status(406).send({error: 406, message: "Insert not found", result: results})

    } catch (error) {
        res.status(500).send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500",
            TypeError
        })
    }
}


//* PUT
export async function putAlquiler(req, res) {
    try {
        let collection = db.collection("alquiler");
        let query = {
            id: { _id: new ObjectId(req.params.id) },
            data: {
                ...req.body
            },
        };

        let result = await collection.updateOne(query.id, { $set: query.data });

        result.modifiedCount > 0 && result.acknowledged === true
            ? res.status(404).send({ error: 304,message: "Operation reconoziced but not modified",refernece: "https://http.cat",})
            : res.status(202).send(result)

    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: 500,
            message: error.message,
            message_2: "No fué posible actualizar la base de datos",
        });
    }
}