import { MongoClient } from 'mongodb';

let conn = undefined;

const connectString = 'mongodb+srv://JuanDev856:juan856@juandev856.ikw3dq6.mongodb.net/';
const cliente = new MongoClient(connectString);

try {
    conn = await cliente.connect();
} catch (error) {
    console.error(error);
}

let db = conn.db('db_campus_alquiler')

export default db;

