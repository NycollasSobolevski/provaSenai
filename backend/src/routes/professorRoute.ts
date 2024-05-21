import { Router } from "express";
import { deleteProfessor, getAllProfessors, postProfessor, updateProfessor } from "../controllers/professorController";

const professorRoute = Router();

const base_url: string = "/api/professor";

professorRoute.get(`${base_url}`, getAllProfessors);
professorRoute.post(`${base_url}`, postProfessor);
professorRoute.patch(`${base_url}/:id`, updateProfessor);
professorRoute.delete(`${base_url}/:id`, deleteProfessor);

export default professorRoute;