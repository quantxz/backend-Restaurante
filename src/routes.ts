import { Router } from "express";
import ClientsControllers from "./App/Controllers/clients.Controllers";
import RestaurantsControllers from "./App/Controllers/restaurants.Controllers";

const routes: Router = Router();

routes.get('/clients', ClientsControllers.index)
routes.post('/clients/register', ClientsControllers.create)
routes.put('/clients/:id', ClientsControllers.update)
routes.delete('/clients/:id', ClientsControllers.delete)

routes.get('/restaurants', RestaurantsControllers.index)
routes.post('/restaurants/register', RestaurantsControllers.create)
routes.put('/restaurants/:id', RestaurantsControllers.update)
routes.delete('/restaurants/:id', RestaurantsControllers.delete)

export default routes;
