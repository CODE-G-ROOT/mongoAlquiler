import mysql from "mysql2";
import config from "./../config.js"; 

const connection = {
    host : config.host,
    database : config.database,
    user: config.user,
    password: config.password
};
const conx = mysql.createPool(connection);
console.log(conx);

export default conx;