import db from "../connection/mongo.js";
import { ObjectId } from "mongodb";

export async function getClientes(req, res) {
    try {

        let collection = await db.collection("cliente");
        let results = await collection.find({}).toArray();

        if (results.length === 0) return res.status(404).send({ status: 404, message: "Found But Without Contain" });
        if (!results) return res.status(404).send({ error: 404, message: "Not Found" })

        console.log(req.rateLimit);
        res.status(200).send(results)

    } catch (error) {
        res.status(500).send({ error: error.status, message: error.message })
        console.log({ error: error, message: error.message });
    }
}