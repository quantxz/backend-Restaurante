import { Response } from "express";
import { knex } from "../../../configs/config";

interface data {
    name?: string;
    password?: string;
    email?: string;
    phone?: string;
}

export const updateClient = async (data: data, id: string) => {
    try {
        return await knex('clients').where('id', id).update({
            name: data.name,
            password: data.password,
            email: data.email,
            phone: data.phone
        })

    } catch (error: any) {   
        throw new Error("Erro ao atualizar cliente: " + error.message);
    }
}