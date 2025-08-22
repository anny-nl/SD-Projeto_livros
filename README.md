# Sistema Distribuído de Cadastro de Livros

Projeto desenvolvido como exercício do conceito de **Sistemas Distribuídos**, utilizando:

- **Node.js + Express**
- **Supabase (Postgres + Autenticação)**
- **dotenv** para variáveis de ambiente

---

## Funcionalidades

- Cadastro de livros (CRUD completo):
  - Título do livro
  - Autor principal
  - Quantidade de páginas
  - Ano de publicação
- Autenticação por **token (JWT)** do Supabase
- Mensagens de erro/sucesso humanizadas

---

## Estrutura do Projeto

```
SD-Projeto_livros/
├── app.js                # Arquivo principal do servidor
├── livros_rotas.js       # Rotas relacionadas aos livros
├── livros_controlador.js # Controladores para as operações de livros
├── supabase.js           # Configuração do cliente Supabase
├── autenticar.js         # Middleware de autenticação
├── package.json          # Configurações do projeto e dependências
├── package-lock.json     # Detalhes das dependências instaladas
└── .env                  # Variáveis de ambiente (não incluído no repositório)
```

Projeto desenvolvido como exercício do conceito de **Sistemas Distribuídos**, utilizando:

- **Node.js + Express**
- **Supabase (Postgres + Autenticação)**
- **dotenv** para variáveis de ambiente

---

## Funcionalidades

- Cadastro de livros (CRUD completo):
  - Título do livro
  - Autor principal
  - Quantidade de páginas
  - Ano de publicação
- Autenticação por **token (JWT)** do Supabase
- Mensagens de erro/sucesso humanizadas

---

## Estrutura do Projeto

---

## Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/projeto-sd-livros.git
   cd projeto-sd-livros/server
   ```
