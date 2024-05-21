import { Atividade } from '../models/atividade';
import { Response, Request } from 'express';

export async function getAllAtividades(req: Request, res: Response) {
    const profs = await Atividade.findAll();
    
    res.status(200).send(profs);
}

export async function postAtividade(req: Request, res: Response) {

    const atividade = req.body;

    console.log(Atividade);

    atividade.createdAt = new Date();
    atividade.updatedAt = new Date();

    await Atividade.create(atividade);

    res.status(200).send(Atividade);
} 

export async function updateAtividade(req: Request, res: Response) {

    const id = req.query.id as string;
    const atividade = req.body;

    await Atividade.update(atividade, { where: { id_atividade: parseInt(id) } })

    res.status(200).send(Atividade);
}

export async function deleteAtividade(req: Request, res: Response) {

    const id = req.query.id as string;
    
    const atividade = await Atividade.findByPk(parseInt(id));

    Atividade?.destroy();

    res.status(200).send(atividade);
}