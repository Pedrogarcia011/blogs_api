# Blogs API

O Blogs API é uma API de gerenciamento de posts de blogs, onde os usuários podem realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em posts, bem como autenticar-se para acessar as funcionalidades protegidas.

## Funcionalidades

- Adicionar novos posts de blog.
- Listar todos os posts existentes.
- Atualizar informações de posts existentes.
- Deletar posts.
- Autenticação de usuários usando tokens JWT (JSON Web Tokens).

## Tecnologias Utilizadas

- **Node.js**: Plataforma para construção de aplicações backend em JavaScript.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em contêineres.
- **Express**: Framework para construção de APIs em Node.js.
- **MySQL**: Banco de dados relacional para armazenar os posts e informações dos usuários.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js que simplifica a interação com bancos de dados SQL.
- **JWT (JSON Web Tokens)**: Mecanismo de autenticação usando tokens assinados.

## Como Executar a API

1. Certifique-se de ter o Docker instalado em sua máquina.

2. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/blogs-api.git

3. Acesse o diretório do projeto:
   ```bash
   cd blogs-api

4. Crie um arquivo .envno diretório raiz e defina as variáveis ​​de ambiente:
    -DB_HOST=seu-host-do-mysql
    -DB_USER=seu-usuario-do-mysql
    -DB_PASSWORD=sua-senha-do-mysql
    -DB_NAME=nome-do-banco-de-dados
    -JWT_SECRET=chave-secreta-para-o-jwt

## Tecnologias Utilizadas:
  - Node.js
  - Docker
  - Expressar
  - MySQL
  - Sequelar
  - JWT (Tokens da Web JSON)
