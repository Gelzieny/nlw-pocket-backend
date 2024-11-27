<p align="center">
  <a href="#">
    🔗 <img src="https://raw.githubusercontent.com/Gelzieny/nlw-in-orbit/f223dd371c284640dad2dc9cf2cd5dbb8db4db72/.github/img/logo.svg"  alt="Logo in.orbit" />
  </a>
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-descricao">Descrição</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

<p align="justify">
Este projeto foi desenvolvido durante o evento Next Level Week Pocket oferecido pela <a href="https://app.rocketseat.com.br/">Rocketseat</a>, como parte da edição in.Orbit. 
O objetivo do evento é permitir que os desenvolvedores construam uma aplicação do zero em uma semana, aprendendo e aplicando novas tecnologias na prática.
</p>

## ⚙️ Descrição

<p align="justify">O in.Orbit é uma aplicação de gerenciamento de metas, onde o usuário pode:</p>

  * Cadastrar novas metas
  * Listar todas as metas cadastradas
  * Acompanhar o progresso semanal com um resumo de metas concluídas
  * Marcar metas como concluídas

## 🎨 Layout

O layout da aplicação está disponível no [Figma](https://www.figma.com/design/0Hmz2mBHCHIDBnQW4XGraD/NLW-Pocket-JS-%E2%80%A2-in.orbit-(Community)-(Copy))

### Insomina

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Tela inicial" title="#TelaInicial" src="https://raw.githubusercontent.com/Gelzieny/nlw_pocket_js/174f8795c51f684d63e91169a5f3d597bc79362a/.github/img/Empty.svg" width="400px">

  <img alt="Cadastrar meta" title="#CadastrarMeta" src="https://raw.githubusercontent.com/Gelzieny/nlw_pocket_js/174f8795c51f684d63e91169a5f3d597bc79362a/.github/img/Create%20goal.svg" width="400px">

  <img alt="Registrar dados" title="#RegistrarDados" src="https://raw.githubusercontent.com/Gelzieny/nlw_pocket_js/174f8795c51f684d63e91169a5f3d597bc79362a/.github/img/Goals%20(empty).svg" width="400px">

  <img alt="Lista de meta" title="#ListaMeta" src="https://raw.githubusercontent.com/Gelzieny/nlw_pocket_js/174f8795c51f684d63e91169a5f3d597bc79362a/.github/img/Goals.svg" width="400px">
</p>

## 🛠 Tecnologias

<p align="justify">Este projeto utiliza um conjunto de tecnologias modernas para garantir uma aplicação eficiente e escalável, incluindo:</p>

  * [Node.js](https://nodejs.org/en/) e [Fastify](https://fastify.dev/) para o backend
  * [Insomina](https://insomnia.rest/download) para teste de APIs
  * [React.js](https://react.dev/) para a interface do usuário
  * [PostgreSQL](https://www.postgresql.org/) como banco de dados
  * [Docker](https://www.docker.com/) Docker para facilitar o ambiente de desenvolvimento e a gestão de containers
  * [Zod](https://zod.dev/) Zod para validação de dados
  * [Drizzle ORM](https://orm.drizzle.team/) Drizzle ORM para manipulação do banco de dados
  * [React Query](https://community.revelo.com.br/react-query-um-guia-pratico/) e [React Hook Form](https://react-hook-form.com/) para gestão de estados e formulários no frontend


## 🚀 Como executar o projeto

### Pré-requisitos

<p align="justify">Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:</p>

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=git,nodejs,docker,vscode" />
</a>

### Clone o repositório

```bash
# Clone este repositório
$ git clone <https://github.com/Gelzieny/nlw-in-orbit.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-in-orbit.git
```

### 🖧 Rodando o Back-End (backend)

```bash
# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente criando um arquivo .env no diretório /server com o seguinte conteúdo:
POSTGRES_URL="postgresql://usuário:senha@host:porta/banco_de_dados"

# Vá para a pasta DockerConfig Inicie os containers do Docker:
$ cd DockerConfig

# Inicie os containers do Docker
$ docker compose up -d

# Aplicar migrações para o banco de dados:
$ npx drizzle-kit migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### 🖥️ Rodando o Front-End (frontend)

```bash
# Vá para a pasta web
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3334 - acesse <http://localhost:3334>
```

# 🧑🏻‍💻 Autor

Feito com ❤️ por Gelzieny R. Martins 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gelzieny-r-martins-180551106/)


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
