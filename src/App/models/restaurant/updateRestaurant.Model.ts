import { knex } from "../../../configs/config"

interface data {
    name?:       string 
    email?:      string
    password?:   string
    phone?:      string     
    cnpj?:       string      
    loc?:        string 
    
    //Role to allow posts
    PostFood?:   boolean
}

export const UpdateRestaurantData = async (data : data, id: any) => {
    try {
        return await knex('restaurants').where('id', id).update({
            name:       data.name,  
            email:      data.email,
            password:   data.password,
            phone:      data.phone,    
            cnpj:       data.cnpj,     
            loc:        data.loc,
            PostFood:  data.PostFood 
        })
    } catch(error: any) {
        throw new Error('não fio possivel atualizar os dados do restaurante ' + error.message)
    }
}