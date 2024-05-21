import { Turma } from '../models/turma';
import { Response, Request } from 'express';

export async function getAllTurmas(req: Request, res: Response) {
    const profs = await Turma.findAll();
    
    res.status(200).send(profs);
}

export async function postTurma(req: Request, res: Response) {

    const turma = req.body;

    turma.createdAt = new Date();
    turma.updatedAt = new Date();

    await turma.create(Turma);

    res.status(200).send(Turma);
} 

export async function updateTurma(req: Request, res: Response) {

    const id = req.query.id as string;
    const turma = req.body;

    await Turma.update(turma, { where: { id_turma: parseInt(id) } })

    res.status(200).send(Turma);
}

export async function deleteTurma(req: Request, res: Response) {

    const id = req.query.id as string;
    
    const turma = await Turma.findByPk(parseInt(id));

    turma?.destroy();

    res.status(200).send(Turma);
}