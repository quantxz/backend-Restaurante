import { Request, Response } from "express";
import { CreateRestaurant } from "../models/restaurant/createRestaurant.Model"
import { knex } from "../../configs/config";
import { UpdateRestaurantData } from "../models/restaurant/updateRestaurant.Model";
import { DeleteRestaurant } from "../models/restaurant/deleteRestautrant.Model";

class RestaurantsControllers {

    public async index(req: Request, res: Response) {
        try {
            const restaurants = await knex('restaurants').select('*')
            return res.json(restaurants)

        }catch (error: any) {
            throw new Error('erro ao selecionar os dados no banco de dados' + error.message)
        }
    }

    public async create(req: Request, res: Response) {
        const { ...data } = req.body;

        try {
            await CreateRestaurant(data)
            const newRestaurants = await knex('restaurants').select('*')
            return res.json(newRestaurants)

        }catch (error: any) {
            throw new Error('erro ao tentar cadastrar restaurante ' + error.message)
        }
    }

    public async update(req: Request, res: Response) {
        const { ...data } = req.body;
        const { id } = req.params;
        try {
            await UpdateRestaurantData(data, id)
            const newRestaurants = await knex('restaurants').select('*')
            return res.json(newRestaurants)

        }catch (error: any) {
            throw new Error('erro ao tentar atualizar restaurante ' + error.message)
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await DeleteRestaurant(id)
            const newRestaurants = await knex('restaurants').select('*')
            return res.json(newRestaurants)

        }catch (error: any) {
            throw new Error('erro ao tentar deletar restaurante ' + error.message)
        }
    }

}

export default new RestaurantsControllers