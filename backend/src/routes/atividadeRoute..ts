import { Router } from "express";
import { deleteAtividade, getAllAtividades, postAtividade, updateAtividade } from "../controllers/atividadeController";

const atividadeRoute = Router();

const base_url: string = "/api/professor";

atividadeRoute.get(`${base_url}`, getAllAtividades);
atividadeRoute.post(`${base_url}`, postAtividade);
atividadeRoute.patch(`${base_url}/:id`, updateAtividade);
atividadeRoute.delete(`${base_url}/:id`, deleteAtividade);

export default atividadeRoute;