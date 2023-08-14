import db from "../connection/mongo.js";

export async function get_empleados(req, res) {

    try {

        let collection = await db.collection('empleado');
        let results = await collection.find({}).toArray();

        results.length > 0
            ? res.status(302).send(results)
            : res.status(200).send({ error: 200, message: "Quety don't exist o Not Found", reference: "https://http.cat/200" })
            
    } catch (error) {
        res.status(500).send({
            error: error,
            message: error.message,
            reference: "https//http.cat/500"
        })
    }
}

export async function get_empleados_cargo(req, res) {

    try {

        let collection = await db.collection('empleado');
        let query = { Cargo: req.params.cg }

        let results = await collection.find(query).toArray();

        results.length > 0
            ? res.status(302).send(results)
            : res.status(200).send({ error: 200, message: "query not found", reference: "https://http.cat/200" })

    } catch (error) {
        res.status(500).send({
            error: 500,
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
}