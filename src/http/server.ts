import fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const app = fastify();
const PORT = Number(process.env.PORT) || 3333; // Converte para número

app.listen({ port: PORT }).then(() => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
