import { knex } from "../../../configs/config"

export const DeleteRestaurant = async (id: any) => {
    try{
        return await knex('restaurants').where('id', id).delete()
    } catch (error: any) {
        throw new Error('erro ao deletar o Restuarante ' + error.message)
    }
}