# Blogs API: Gerenciamento de Posts de Blogs

Bem-vindo ao Blogs API, uma plataforma robusta e flexível para gerenciamento de posts de blogs. Nosso projeto permite que os usuários realizem operações CRUD (Criar, Ler, Atualizar, Deletar) em posts de blogs, ao mesmo tempo em que oferece recursos avançados de autenticação para garantir a segurança dos dados e funcionalidades protegidas.

## Principais Características:

- ### Operações CRUD de Posts: 
  Os usuários podem criar, ler, atualizar e excluir posts de maneira fácil e eficiente. Isso permite que eles compartilhem suas histórias e conhecimento com o mundo.

- ### Autenticação Segura:
  Utilizamos um sistema de autenticação robusto para garantir que apenas usuários autorizados possam acessar recursos protegidos. Isso ajuda a 
  proteger os dados e manter a integridade da plataforma.

- ### Modelo MSC (Model-Service-Controller):
  Seguimos uma arquitetura de código organizada com base no Modelo-Serviço-Controlador (MSC) para manter nosso código bem estruturado, escalável e de fácil manutenção.

- ### Flexibilidade:
  Nossa API é altamente flexível e pode ser facilmente personalizada para atender às necessidades específicas do seu projeto. Você pode estender suas funcionalidades de 
  acordo com os requisitos do seu blog.

## Tecnologias Utilizadas

- **Node.js**: A base da nossa aplicação, que permite a construção de servidores web escaláveis e eficientes.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em contêineres.
- **Express**: Um framework web que simplifica o desenvolvimento de APIs RESTful em Node.js.
- **MySQL**: Banco de dados relacional para armazenar os posts e informações dos usuários.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js que simplifica a interação com bancos de dados SQL.
- **JWT (JSON Web Tokens)**: Utilizado para autenticação segura e criação de tokens.

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
  - Sequelize
  - JWT (Tokens da Web JSON)
