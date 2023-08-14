import db from "../connection/mongo.js";

export async function get_reservas(req,res){

    try {
        
        let collection = await db.collection('reserva');
        let result = await collection.find({}).toArray();

        res.status(302).send(result)

    } catch (error) {
        res.status(500).send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}

export async function get_reservas_estado(req, res) {

    try {

        let collection = await db.collection('reserva');
        let query = { Estado: req.params.sto };
        let result = await collection.aggregate([
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
                $match: query
            },
            {
                $group: {
                    _id: "$ID_Reserva",
                    ID_Cliente: { $addToSet: "$cliente" },
                    ID_Automovil: { $addToSet: "$automovil" },
                    Fecha_Reserva: { $first: "$Fecha_Reserva" },
                    Fecha_Inicio: { $first: "$Fecha_Inicio" },
                    Fecha_Fin: { $first: "$Fecha_Fin" },
                    Estado: { $first: "$Estado" },
                }
            },
            {
                $project: {
                    _id: 1,
                    ID_Cliente: 1,
                    ID_Automovil: {
                        ID_Automovil: 1,
                        Marca: 1,
                        Modelo: 1,
                        Año: 1,
                        Tipo: 1,
                        Capacidad: 1,
                        Precio_Diario: 1,
                    },
                    Fecha_Reserva: {
                        $dateToString: {
                            date: "$Fecha_Reserva",
                            format: "%Y-%m-%dT%H:%M:%SZ"
                        }
                    },
                    Fecha_Inicio: {
                        $dateToString: {
                            date: "$Fecha_Inicio",
                            format: "%Y-%m-%dT%H:%M:%SZ"
                        }
                    },
                    Fecha_Fin: {
                        $dateToString: {
                            date: "$Fecha_Fin",
                            format: "%Y-%m-%dT%H:%M:%SZ"
                        }
                    },
                    Estado: 1,
                }
            },
            {
                $sort: { _id: 1 }
            }

        ]).toArray();

        query.Estado === "Pendiente" || query.Estado === "Disponible" && result.length > 0 
            ? res.status(302).send(result)
            : res.status(400).send({error: 400, message: "Param don't found", reference: "https://http.cat/400"})

    } catch (error) {
        res.status(500).send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}