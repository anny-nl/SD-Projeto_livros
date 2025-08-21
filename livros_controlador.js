// REMOVA a linha de importação do supabase daqui:
// import { supabase } from "./supabase.js";

export const criarLivro = async (req, res) => {
  const { titulo, autor, paginas, ano } = req.body;
  const userId = req.usuario.id;
  const livroParaInserir = { titulo, autor, paginas, ano, user_uid: userId };

  // ✨ A MUDANÇA É ADICIONAR .select() NO FINAL ✨
  const { data, error } = await req.supabase
    .from("books")
    .insert([livroParaInserir])
    .select(); // Pede ao Supabase para retornar o que foi inserido

  if (error) {
    console.error("Erro detalhado do Supabase:", error);
    return res.status(400).json({ erro: error.message });
  }

  // Agora 'data' conterá o livro recém-criado dentro de um array
  res
    .status(201)
    .json({ mensagem: "📚 Livro cadastrado com sucesso!", data: data });
};

export const listarLivros = async (req, res) => {
  // ✨ USA O CLIENTE DO USUÁRIO, NÃO O GLOBAL ✨
  const { data, error } = await req.supabase.from("books").select("*");
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
};

export const atualizarLivro = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, paginas, ano } = req.body;

  // ✨ USA O CLIENTE DO USUÁRIO, NÃO O GLOBAL ✨
  const { data, error } = await req.supabase
    .from("books")
    .update({ titulo, autor, paginas, ano })
    .eq("id", id);

  if (error) return res.status(400).json({ erro: error.message });
  res.json({ mensagem: "✏️ Livro atualizado com sucesso!", data });
};

export const removerLivro = async (req, res) => {
  const { id } = req.params;

  // ✨ USA O CLIENTE DO USUÁRIO, NÃO O GLOBAL ✨
  const { data, error } = await req.supabase
    .from("books")
    .delete()
    .eq("id", id);
  if (error) return res.status(400).json({ erro: error.message });
  res.json({ mensagem: "🗑️ Livro removido com sucesso!", data });
};
