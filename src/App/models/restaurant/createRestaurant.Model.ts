import { knex } from "../../../configs/config";

interface data {
    name:       string 
    email:      string
    password:   string
    phone:      string     
    cnpj:       string      
    loc:        string 
    
    //role para permitir postar comidas
    PostFood?:   boolean
}

export const CreateRestaurant = async (data: data) => {
    try {
        return await knex('restaurants').insert({
            name:       data.name,
            email:      data.email,
            password:   data.password,
            phone:      data.phone,   
            cnpj:       data.cnpj,      
            loc:        data.loc,       
            PostFood:   data.PostFood
        })

    } catch (error: any) {
        if (error.code === "ER_DUP_ENTRY" && error.errno === 1062) {
            throw new Error("O email já está cadastrado");
        } else {
            throw new Error("Erro ao criar cliente: " + error.message);
        }
    }
}