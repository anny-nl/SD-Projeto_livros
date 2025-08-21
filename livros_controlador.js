import { supabase } from "../config/supabase.js"

// Criar livro
export const criarLivro = async (req, res) => {
  const { titulo, autor, paginas, ano } = req.body

  const { data, error } = await supabase
    .from("books")
    .insert([{ titulo, autor, paginas, ano }])

  if (error) return res.status(400).json({ erro: error.message })

  res.status(201).json({ mensagem: "📚 Livro cadastrado com sucesso!", data })
}

// Listar livros
export const listarLivros = async (req, res) => {
  const { data, error } = await supabase.from("books").select("*")

  if (error) return res.status(400).json({ erro: error.message })

  res.json(data)
}

// Atualizar livro
export const atualizarLivro = async (req, res) => {
  const { id } = req.params
  const { titulo, autor, paginas, ano } = req.body

  const { data, error } = await supabase
    .from("books")
    .update({ titulo, autor, paginas, ano })
    .eq("id", id)

  if (error) return res.status(400).json({ erro: error.message })

  res.json({ mensagem: "✏️ Livro atualizado com sucesso!", data })
}

// Deletar livro
export const removerLivro = async (req, res) => {
  const { id } = req.params

  const { data, error } = await supabase.from("books").delete().eq("id", id)

  if (error) return res.status(400).json({ erro: error.message })

  res.json({ mensagem: "🗑️ Livro removido com sucesso!", data })
}
