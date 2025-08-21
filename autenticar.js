import { supabase } from "../config/supabase.js"

export const autenticar = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "")

  if (!token) {
    return res.status(401).json({ erro: "⚠️ Token não enviado" })
  }

  const { data, error } = await supabase.auth.getUser(token)

  if (error || !data.user) {
    return res.status(401).json({ erro: "❌ Usuário não autenticado" })
  }

  req.usuario = data.user
  next()
}
