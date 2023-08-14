import db from "../connection/mongo.js";

export async function getClientes(req, res) {
    try {

        let collection = await db.collection("cliente");
        let results = await collection.find({}).toArray();

        if (results.length == 0) return res.status(404).send({ status: 404, message: "Found But Without Contain" });
        if (!results) return res.status(404).send({ error: 404, message: "Not Found", reference: "https://http.cat/404" })

        console.log(req.rateLimit);
        res.status(302).send(results)

    } catch (error) {
        res.status(500).send({ error: error.status, message: error.message })
        console.log({ error: error, message: error.message });
    }
};

export async function getCliente_DNI(req, res) {
    try {
        let collection = await db.collection('cliente');
        let query = {
            DNI: Number(req.params.id)
        };

        let results = await collection.find(query).toArray(); // Agregar .toArray()

        results.length > 0
            ? res.status(302).send(results)
            : res.status(404).send({ error: 404, message: "Query Not Found", reference: "https://http.cat/404" })

    } catch (error) {
        res.status(500).send({
            error: error,
            message: error.message,
            reference: "https://http.cat/500"
        });
    }
};

export async function getCliente_Alquiler(req, res) {

    try {
        let collection_cliente = await db.collection("cliente");
        let collection_alquiler = await db.collection("alquiler");

        let cliente_ID_ConAlquiler = await collection_alquiler.distinct("ID_Cliente");

        let clientesConAlquiler = await collection_cliente.find({
            ID_Cliente: { $in: cliente_ID_ConAlquiler }
        }).toArray();

        collection_cliente 
            ? console.log("collection_cliente exist") 
            : res.status(204).send({ error: 204, message: "Collection client Not Found", reference: "https://http.cat/204"})

        cliente_ID_ConAlquiler
        ? console.log("Exist in alquiler") 
        : res.status(204).send({ error: 204, message: "Collection ID_ALQUI Not Found", reference: "https://http.cat/204"})

        clientesConAlquiler
            ? res.status(302).send(clientesConAlquiler) 
            : res.status(204).send({error: 204, message: "Clients Not Founds", reference: "https://http.cat/204"});

    } catch (error) {
        res.status(500).send({
            error: error,
            message: "Internal Server Error",
            reference: "https://http.cat/500"
        });
    }
}
