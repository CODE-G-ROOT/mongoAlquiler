import app from "./app.js";

const main = ()=>{
    app.listen(app.get('port'));
}

main();

console.log(`http://localhost:${app.get('port')}/home/users`);