import { Router } from "express";
import { createPerson, getPeople, getPersonById, updatePerson, deletePerson } from "../controllers/Person/UserController"; // Ajuste o caminho conforme necessário

const personRouter = Router();

// As rotas agora usam as funções do controlador corretamente
personRouter.post("/person", createPerson);
personRouter.get("/people", getPeople);
personRouter.get("/person/:id", getPersonById);
personRouter.put("/person/:id", updatePerson);
personRouter.delete("/person/:id", deletePerson);

export default personRouter;
