import { Response } from "express";
import { knex } from "../../../configs/config";




interface data {
    name: string;
    password: string;
    email: string;
    phone: string;
}

export const CreateClient = async (data: data) => {
    try {
        return await knex("clients").insert({
            name: data.name,
            password: data.password,
            email: data.email,
            phone: data.phone
        });

    } catch (error: any) {
        if (error.code === "ER_DUP_ENTRY" && error.errno === 1062) {
            throw new Error("O email já está cadastrado");
        } else {
            throw new Error("Erro ao criar cliente: " + error.message);
        }
    }
}