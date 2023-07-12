import conx from "./../DB/db.js";
const getUsers = async (req, res)=>{
    try {
        conx.query("SELECT * FROM `users`;",(err, data , fil)=>{
            res.send(data);
        });
    } catch (err) {
        res.status(500);
        res.send(err.message)
    }
}

export default getUsers;