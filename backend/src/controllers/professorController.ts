import { Professor } from "../models/professor";
import { Response, Request } from 'express';

export async function getAllProfessors(req: Request, res: Response) {
    const profs = await Professor.findAll();
    
    res.status(200).send(profs);
}

export async function postProfessor(req: Request, res: Response) {

    const professor = req.body;

    console.log(professor);

    professor.createdAt = new Date();
    professor.updatedAt = new Date();

    await Professor.create(professor);

    res.status(200).send(professor);
} 

export async function updateProfessor(req: Request, res: Response) {

    const id = req.query.id as string;
    const professor = req.body;

    await Professor.update(professor, { where: { id_professor: parseInt(id) } })

    res.status(200).send(professor);
}

export async function deleteProfessor(req: Request, res: Response) {

    const id = req.query.id as string;
    
    const professor = await Professor.findByPk(parseInt(id));

    professor?.destroy();

    res.status(200).send(professor);
}