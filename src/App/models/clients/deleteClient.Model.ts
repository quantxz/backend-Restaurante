import { Response } from "express";
import { knex } from "../../../configs/config";


export const deleteClient = async (id: string) => {
    try {
        return await knex('clients').where('id', id).delete()
        
    } catch (error: any) {
        throw new Error("Erro ao deletar cliente: " + error.message);
    }
}