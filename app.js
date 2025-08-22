import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import livrosRotas from "./livros_rotas.js";

import { supabase } from "./supabase.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());

app.use("/livros", livrosRotas);

const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando na porta ${PORTA}`);
});
