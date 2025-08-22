# Sistema Distribuído de Cadastro de Livros - Backend

Este é o **backend** do sistema de Cadastro de Livros, desenvolvido como exercício prático do conceito de **Sistemas Distribuídos**.  
A aplicação foi construída em **Node.js** com **Express**, utilizando **Supabase** como banco de dados e autenticação.

---

## Tecnologias Utilizadas

- **Node.js + Express** → criação da API REST
- **Supabase** → banco de dados PostgreSQL e autenticação JWT
- **dotenv** → gerenciamento de variáveis de ambiente
- **CORS** → permitir requisições do frontend
- **Axios** (no frontend) para consumo da API

---

## Funcionalidades

- **Cadastro de livros (CRUD completo)**:

  - Título do livro
  - Autor principal
  - Quantidade de páginas
  - Ano de publicação

- **Autenticação** via **token JWT** do Supabase
- **Mensagens de erro e sucesso** claras e humanizadas

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

A API é organizada seguindo boas práticas de separação de responsabilidades:

- **server.js / index.js** → inicialização do servidor Express
- **routes/** → definição das rotas de livros e autenticação
- **controllers/** → lógica de cada funcionalidade (CRUD)
- **middlewares/** → verificação de token e tratamento de erros
- **config/** → variáveis de ambiente e integração com Supabase

## Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/projeto-sd-livros.git
   cd projeto-sd-livros/server
   Npm install
   Npm install cors
   Npm run dev
   ```


-


