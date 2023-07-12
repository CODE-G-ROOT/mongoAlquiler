import express from "express";
import users_routes from "./routes/users.routes.js"

const app = express();

app.set("port", 8085);

// ROUTES
app.use("/home/users", users_routes);

export const routes_app = {
    home : "home",
    users : "home/users"
}

export default app;