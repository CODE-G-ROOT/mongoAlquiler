import db from "../connection/mongo.js";

export async function get_sucursal_automovil(req, res) {

    try {

        let collection = await db.collection("sucursal");
        let result = await collection.aggregate([
            {
                $lookup: {
                    from: "sucursal_automovil",
                    localField: "ID_Sucursal",
                    foreignField: "ID_Sucursal",
                    as: "sucursal_automovil",
                },
            },
            {
                $unwind: "$sucursal_automovil",
            },
            {
                $lookup: {
                    from: "automovil",
                    localField: "sucursal_automovil.ID_Automovil",
                    foreignField: "ID_Automovil",
                    as: "automovil",
                },
            },
            {
                $unwind: "$automovil",
            },
            {
                $group: {
                    _id: "$ID_Sucursal",
                    Nombre: { $first: "$Nombre" },
                    Dirección: { $first: "$Dirección" },
                    Teléfono: { $first: "$Teléfono" },
                    sucursal_automovil: { $addToSet: "$sucursal_automovil" },
                    automovil: { $addToSet: "$automovil" },
                }
            },
            {
                $project: {
                    _id: 1,
                    Nombre: 1,
                    Dirección: 1,
                    Teléfono: 1,
                    sucursal_automovil: {
                        ID_Sucursal: 1,
                        ID_Automovil: "$automovil"
                    },
                    Cantidad_Disponible: 1,
                },

            },
            {
                $sort: { _id: 1 }
            }
        ]).toArray();

        result.length > 0
            ? res.status(302).send(result)
            : res.status(404).send({ error: 404, message: "Query not Found or not Exist", reference: "https://http.cat/404" });

    } catch (error) {
        res.status(500), send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}