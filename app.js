import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import livrosRotas from "./livros_rotas.js";
// A importação do supabase aqui não é mais estritamente necessária
// se ele só é usado dentro de 'livros_rotas.js', mas não há problema em deixar.
import { supabase } from "./supabase.js";

dotenv.config();
const app = express();

// Middleware global para JSON
app.use(express.json());

// Configuração do CORS
app.use(cors());

// Rotas principais da sua aplicação
app.use("/livros", livrosRotas);

const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando na porta ${PORTA}`);
});
