import { Professor } from "../models/professor";
import { Response, Request } from 'express';

export async function getAllProfessors(req: Request, res: Response) {
    try {
        const profs = await Professor.findAll();
        console.log(profs)
        res.status(200).send(profs);
    } catch (err) {
        res.send(err)
    }
}

export async function postProfessor(req: Request, res: Response) {

} 