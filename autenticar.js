import { createClient } from "@supabase/supabase-js";
import {
  supabase as supabaseAdmin,
  supabaseUrl,
  supabaseKey,
} from "./supabase.js";

export const autenticar = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ erro: "⚠️ Token não enviado" });
  }

  const {
    data: { user },
    error,
  } = await supabaseAdmin.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ erro: "❌ Usuário não autenticado" });
  }

  req.usuario = user;

  req.supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });

  next();
};

