import { Request, Response } from 'express';
import { knex } from '../../configs/config';
import { CreateClient } from '../models/clients/createClient.Model';
import { updateClient } from '../models/clients/updateClient.Model';
import { deleteClient } from '../models/clients/deleteClient.Model';

class ClientsControllers {
   
    public async index(req: Request, res: Response){
        const data = await knex('clients').select('*')
        return res.json(data)
    }

    public async create(req: Request, res: Response) {
        const { ...data } = req.body;

        try {
            await CreateClient(data);
            const newResults = await knex('clients').select('*')
            return res.json(newResults);

        } catch (error: any) {
            return res.status(500).json({ error: error.message });   
        }
    }

    public async update(req: Request, res: Response) {
        const { ...data } = req.body;
        const { id } = req.params; 

        try {
            updateClient(data, id)
            const newResults = await knex('clients').select('*').where('id', id)
            return res.json(newResults);

        } catch(error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        
        try {
            deleteClient(id);
            const newResults = await knex('clients').select('*').where('id', id)
            return res.json(newResults);

        } catch (error: any) {
            return res.status(500).json({ error: error.message }); 
        }
    }

}

export default new ClientsControllers