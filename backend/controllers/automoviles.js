import db from "../connection/mongo.js";

export async function getAutomoviles_Alquiler(req, res) {
    try {

        let collection = await db.collection("automovil");
        let results = await collection.aggregate([
            {
                $lookup: {
                    from: "alquiler",
                    localField: "ID_Automovil",
                    foreignField: "ID_Automovil",
                    as: "alquiler"
                }
            },
            {
                $unwind: "$alquiler",
            },
            {
                $lookup: {
                    from: "cliente",
                    localField: "alquiler.ID_Cliente",
                    foreignField: "ID_Cliente",
                    as: "cliente"
                }
            },
            {
                $unwind: "$cliente",
            },
            {
                $match: {
                    "alquiler.Estado": "Disponible"
                }
            },
            {
                $group: {
                    _id: "$ID_Automovil",
                    Marca: { $first: "$Nombre" },
                    Modelo: { $first: "$Modelo" },
                    Año: { $first: "$Año" },
                    Tipo: { $first: "$Tipo" },
                    Capacidad: { $first: "$Capacidad" },
                    Precio_Diario: { $first: "$Precio_Diario" },
                    alquiler: { $addToSet: "$alquiler" },
                    cliente: { $addToSet: "$cliente" }
                }
            },
            {
                $project: {
                    Modelo: 1,
                    Año: 1,
                    Tipo: 1,
                    Capacidad: 1,
                    Precio_Diario: 1,
                    alquiler: {
                        ID_Alquiler: 1,
                        ID_Cliente: "$cliente",
                        Fecha_Inicio: {
                            $dateToString: {
                                date: {
                                    $arrayElemAt: ["$alquiler.Fecha_Inicio", 0]
                                },
                                format: "%Y-%m-%dT%H:%M:%SZ"
                            }
                        },
                        Fecha_Fin: {
                            $dateToString: {
                                date: {
                                    $arrayElemAt: ["$alquiler.Fecha_Fin", 0]
                                },
                                format: "%Y-%m-%dT%H:%M:%SZ"
                            }
                        },
                        Estado: 1,
                    }
                },
            },
            {
                $sort: { _id: 1 }
            }
        ]).toArray();

        if (!results) return res.status(404).send({ error: 404, message: "Query Not Found Or Not Exist", reference: "https://http.cat/404" });

        results.length > 0
            ? res.status(404).send({ error: 404, message: "Exist Query But Found", reference: "https://http.cat/404" })
            : res.status(302).send(results);

        console.log(req.rateLimit);

    } catch (error) {
        res.status(500).send({
            error: error,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}

export async function getAuomoviles_QT(req, res) {

    try {

        let collection = await db.collection("automovil");
        let query = {
            Capacidad: {
                $gte: Number(req.params.id)
            }
        };

        let results = await collection.find(query).toArray();

        results.length > 0
            ? res.status(302).send(results)
            : res.status(404).send({ error: 404, message: "Query Not Found", reference_error: "https://http.cat/404" });

    } catch (error) {
        res.send(500).send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}

export async function getAuomoviles_LT(req, res) {

    try {

        let collection = await db.collection("automovil");
        let query = {
            Capacidad: {
                $lte: Number(req.params.id)
            }
        };

        let results = await collection.find(query).toArray();

        results.length > 0
            ? res.status(302).send(results)
            : res.status(404).send({ error: 404, message: "Query Not Found", reference_error: "https://http.cat/404" });

    } catch (error) {
        res.send(500).send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}

export async function getAuomoviles_Modelo_Marca(req, res) {

    try {

        let collection = await db.collection("automovil");

        let query = {
            Marca: 1,
            Modelo: 1
        }

        let results = await collection.find({}).sort(query).toArray();

        results.length > 0
            ? res.status(302).send(results)
            : res.status(404).send({ error: 404, message: "Query Not Found or Not Exist", reference: "https://http.cat/404" });

        results 
            ? res.status(302).send(results)
            : res.status(404).send({ error: 404, message: "Query Not Exist", reference: "https://http.cat/404" });

    } catch (error) {
        res.status(500).send({
            error: error,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}

export async function getAutomoviles(req,res){

    try {
        
        let collection = db.collection("automovil");
        let results = await collection.find({});

        results.length > 0
            ? res.status(302).send(results)
            : res.status(404).send({error: 404, message: "Query Not found or don't exist", reference: "https://http.cat/404"})

    } catch (error) {
        
        res.status(500).send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}