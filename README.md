# **Food Explorer API**

A aplicação que foi desenvolvida é uma API de um cardápio digital para um restaurante fictício, conhecido como Food Explorer

## 📖 **Sobre o Projeto**

# Food Explorer

O **Food Explorer** é uma aplicação voltada para o gerenciamento e pedidos de pratos de um restaurante. A plataforma possui dois tipos de usuários: o **Administrador** e o **Usuário Comum**.

- O **Administrador** pode gerenciar os pratos no sistema, adicionando novos itens, editando informações dos pratos existentes e removendo-os quando necessário.
- O **Usuário Comum** pode navegar pelos pratos disponíveis, visualizar detalhes sobre cada um deles e realizar seus pedidos de forma prática.

## Features


- **API RESTful**: A API segue o padrão RESTful para garantir uma estrutura clara e consistente para todas as rotas e funcionalidades da aplicação.
- **Rotas Autenticadas**: Rotas protegidas para assegurar que apenas usuários autenticados tenham acesso a determinadas páginas.
- **Rotas da Aplicação**: Estrutura de rotas para navegação eficiente dentro da aplicação.
- **Persistência de Dados**: As informações do administrador, restaurante e usuários são armazenadas em um banco de dados.
- **Autenticação de Usuários**: Tela de login para autenticação e controle de acesso à aplicação.
- **Busca por Nome de Prato**: Funcionalidade de busca que permite ao usuário pesquisar pratos pelo nome.
- **Upload de Imagens pelo Admin**: O administrador pode fazer upload de imagens para cadastrar e editar pratos e ingredientes.
- **Deploy da Aplicação**: A aplicação foi implantada e está acessível online.
- **Divisão dos Controllers**: Utilizamos controllers separados para cada rota e funcionalidade da aplicação, melhorando a organização e manutenção do código.
- **Migrations com Knex.js**: Utilizamos o Knex.js para a criação e gerenciamento de migrations, facilitando o controle e versionamento do esquema do banco de dados.
- **Separação de Dependências**: As dependências do projeto são bem organizadas para melhorar o entendimento e a manutenção do código.
- **Integração com o Frontend (CORS)**: Utilizamos o CORS para permitir a comunicação entre o frontend e o backend, garantindo que a aplicação possa se conectar facilmente com a interface do usuário.


## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:


  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  - [Node.js](https://nodejs.org/en/docs/)

  - [SQLite](https://www.sqlite.org/docs.html)

  - [Kex.js](https://knexjs.org/)

  - [Express.js](https://expressjs.com/pt-br/)






## ⚙️ **Requisitos**

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [GIT](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/package-manager)


### **Backend (API)**

1. Clone o repositório do backend:
   ```bash
   git clone https://github.com/VitorTorquato/food-explorer-API


## 🛠️ **Como Rodar o Projeto BackEnd**

- Clone este repositório
$ https://github.com/VitorTorquato/food-explorer-API
- Acesse a pasta do projeto no terminal/cmd
$ cd + sua pasta + git clone https://github.com/VitorTorquato/food-explorer-API
- Instale as dependências
$ npm install
- Execute as migration
$ npm migrate
- Execute a aplicação em modo de desenvolvimento
$ npm run dev
- Login do admin
$ email: adming@gmail.com.br
$ password: admin
- O servidor inciará na porta:3000 - acesse <http://localhost:3000>

## 🛠️ **Como Rodar o ProjetoFrontEnd**

- Clone este repositório
$ https://github.com/VitorTorquato/food-explorer
- Acesse a pasta do projeto no terminal/cmd
$ cd + sua pasta + git clone https://github.com/VitorTorquato/food-explorer
- Instale as dependências com:
$ npm install
- Rode a aplicação em modo de desenvolvimento:
$ npm run dev
- O servidor inciará na porta:3001 - acesse <   http://127.0.0.1:5173/ >


## **Deploy do projeto**

<https://foodmenuexplorer.netlify.app/>

## Autor




[<img alingn="center" alt="HTML5" src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white">](https://www.linkedin.com/in/vitor-torquato-3743b6291/)