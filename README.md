<p align="center">
  <a href="#">
    🔗 <img src="https://raw.githubusercontent.com/Gelzieny/nlw-in-orbit/f223dd371c284640dad2dc9cf2cd5dbb8db4db72/.github/img/logo.svg"  alt="Logo in.orbit" />
  </a>
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-descricao">Descrição</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-funcionalidades">Funcionalidades</a> • 
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

- Cadastrar novas metas
- Listar todas as metas cadastradas
- Acompanhar o progresso semanal com um resumo de metas concluídas
- Marcar metas como concluídas

## 🎨 Layout

O layout da aplicação está disponível no [Figma](<https://www.figma.com/design/0Hmz2mBHCHIDBnQW4XGraD/NLW-Pocket-JS-%E2%80%A2-in.orbit-(Community)-(Copy)>)

### Back-end

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img src="https://github.com/Gelzieny/nlw-in-orbit/blob/main/.github/img/lista.png?raw=true" width="400px" alt="tela do vscode com a função que faz uma consulta no banco" />

  <img src="https://github.com/Gelzieny/nlw-in-orbit/blob/main/.github/img/schemadb.png?raw=true" width="400px" alt="tela do vscode com a função com campos do banco de dados em typeScript" />

  <img src="https://github.com/Gelzieny/nlw-in-orbit/blob/main/.github/img/sql.png?raw=true" width="400px" alt="scrit sql" />

  <img src="https://github.com/Gelzieny/nlw-in-orbit/blob/main/.github/img/insominia.png?raw=true" width="400px" alt="Tela do insominia listando todas as atividades" />

</p>

### Front-end

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Tela inicial" title="#TelaInicial" src="https://raw.githubusercontent.com/Gelzieny/nlw-in-orbit/68451ffbfe977ab1819aa7fb9bca49433acaa348/.github/img/Empty.svg" width="400px">

  <img alt="Cadastrar meta" title="#CadastrarMeta" src="https://raw.githubusercontent.com/Gelzieny/nlw-in-orbit/68451ffbfe977ab1819aa7fb9bca49433acaa348/.github/img/Create%20goal.svg" width="400px">

  <img alt="Lista atividades" title="#ListaAtividades" src="https://raw.githubusercontent.com/Gelzieny/nlw-in-orbit/68451ffbfe977ab1819aa7fb9bca49433acaa348/.github/img/Goals%20(empty).svg" width="400px">

  <img alt="Lista de meta" title="#ListaMeta" src="https://raw.githubusercontent.com/Gelzieny/nlw-in-orbit/68451ffbfe977ab1819aa7fb9bca49433acaa348/.github/img/Goals.svg" width="400px">
</p>

## ⚙️ Funcionalidades

- 📝 **Adicionar Metas**: Crie metas semanais com detalhes sobre os dias em que deseja cumpri-las.
- 📅 **Definir Dias**: Escolha em quantos e quais dias da semana você deseja cumprir cada meta.
- ✅ **Marcar Metas Cumpridas**: Selecione as metas que já foram realizadas ao longo da semana.
- 📊 **Relatório Semanal**: Veja um relatório detalhado de todas as metas cumpridas, com dias e horários de conclusão.

## 🛠 Tecnologias

<p align="justify">Este projeto utiliza um conjunto de tecnologias modernas para garantir uma aplicação eficiente e escalável, incluindo:</p>

### Backend

- 🟢 **[Node.js](https://nodejs.org/)**: Plataforma JavaScript utilizada para construir o servidor.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto do JavaScript que adiciona tipagem estática opcional.
- ⚡ **[Fastify](https://www.fastify.io/)**: Framework web para Node.js, focado em alta performance e baixo overhead.
- 🐳 **[Docker Compose](https://docs.docker.com/compose/)**: Ferramenta para configurar e executar múltiplos containers Docker.
- 🛡️ **[Zod](https://zod.dev/)**: Biblioteca para validação de esquemas de dados e validações runtime.
- 🗄️ **[Drizzle ORM](https://orm.drizzle.team/)**: ORM leve e focado em performance.
- 🐘 **[Postgres](https://www.postgresql.org/)**: Banco de dados relacional utilizado para armazenamento de dados.
- 🆔 **[@paralleldrive/cuid2](https://github.com/paralleldrive/cuid2)**: Biblioteca para geração de IDs únicos de forma segura.
- 📆 **[Day.js](https://day.js.org/)**: Biblioteca para manipulação e formatação de datas.
- 🔐 **[Fastify-type-provider-zod](https://github.com/fastify/fastify-type-provider-zod)**: Provedor de tipos para integração entre Fastify e Zod, garantindo validação de tipos no Fastify.
- 🌱 **[Biome](https://biomejs.dev/)**: Ferramenta de linting e formatação para garantir código limpo.

### Frontend

- ⚛️ **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- ⚡ **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida para desenvolvimento frontend.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto de JavaScript com tipagem estática.
- 🎨 **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização.
- 📡 **[React Query](https://tanstack.com/query/v3/)**: Biblioteca para gerenciamento de estados e requisições assíncronas.
- 📝 **[React Hook Form](https://react-hook-form.com/)**: Biblioteca para lidar com formulários no React.
- 🖱️ **[@radix-ui](https://www.radix-ui.com/)**: Biblioteca de componentes acessíveis e de alto desempenho para interfaces de usuário.
- 🖼️ **[Lucid React](https://www.npmjs.com/package/lucid-react)**: Biblioteca de componentes React.
- 🌱 **[Biome](https://biomejs.dev/)**: Ferramenta de linting e formatação para garantir código limpo.

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
$ cd frontend

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
