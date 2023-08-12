import db from "../connection/mongo.js";
import { ObjectId } from "mongodb";

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

        if(!results) res.status(404).send({error: 404, message: "Query Not Found Or Not Exist"});
        if(results == '') res.status(404).send({error: 404, message: "Exist Query But Found Or Not Exist"});
        else return res.status(200).send(results);

        console.log(req.rateLimit);

    } catch (error) {
        res.status(404).send({
            error: error,
            message: error.message,
            log: vaya
        })
    }
}

export async function getAuomoviles_QT(req,res) {

    try {
        
        let collection = await db.collection("automovil");
        let query = {
            Capacidad: {
                $gte: Math.
            }
        }
        
    } catch (error) {
        
    }
}
