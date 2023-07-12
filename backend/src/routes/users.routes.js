import {Router} from 'express';
import controllers from '../controllers/contrllers.js';

const routes = Router();

routes.get("/", controllers.methodsHTTP.getUsers);

export default routes;