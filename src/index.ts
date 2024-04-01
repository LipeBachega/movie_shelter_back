import fastify from "fastify";
import connect from "./dataBase/sequelize";
import dotenv from "dotenv";

dotenv.config();

const envPort: string = process.env.FASTIFY_PORT ?? "";

if (!envPort) {
  console.log(
    "As variáveis de ambiente de conexão não estão configuradas corretamente."
  );
  process.exit(1);
}

const port: number = parseInt(envPort);
const sequelize = connect;

const server = fastify();

server.get("/listen", async (req, res) => {
  return res.status(200).send(`Vc entrou na rota de escutar: ${port}`);
});

server.listen({ port: port }, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Escutando na porta: ${port}`);
});
