import express from "express"
import dotenv from "dotenv"
import livrosRotas from "./src/rotas/livros_rotas.js"

dotenv.config()
const app = express()

// Middleware global para JSON
app.use(express.json())

// Rotas principais
app.use("/livros", livrosRotas)

const PORTA = process.env.PORT || 3000
app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando na porta ${PORTA}`)
})
