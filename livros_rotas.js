import express from "express";
import {
  criarLivro,
  listarLivros,
  atualizarLivro,
  removerLivro,
} from "./livros_controlador.js";
import { autenticar } from "./autenticar.js";

const router = express.Router();

router.post("/", autenticar, criarLivro);
router.get("/", autenticar, listarLivros);
router.put("/:id", autenticar, atualizarLivro);
router.delete("/:id", autenticar, removerLivro);

export default router;
