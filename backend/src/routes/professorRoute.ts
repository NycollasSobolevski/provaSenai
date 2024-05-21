import { Router } from "express";
import { getAllProfessors } from "../controllers/professorController";

const professorRoute = Router();

const base_url: string = "/api/professor";

professorRoute.get(`${base_url}`, getAllProfessors);

export default professorRoute;