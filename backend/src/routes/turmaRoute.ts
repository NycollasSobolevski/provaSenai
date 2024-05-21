import { Router } from "express";
import { deleteTurma, getAllTurmas, postTurma, updateTurma } from "../controllers/turmaController";

const turmaRoute = Router();

const base_url: string = "/api/professor";

turmaRoute.get(`${base_url}`, getAllTurmas);
turmaRoute.post(`${base_url}`, postTurma);
turmaRoute.patch(`${base_url}/:id`, updateTurma);
turmaRoute.delete(`${base_url}/:id`, deleteTurma);

export default turmaRoute;