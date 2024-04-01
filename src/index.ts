import fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const envPort: string = process.env.FASTIFY_PORT ?? "";

if (!envPort) {
  console.log("A variável de ambiente port não está configurada corretamente.");
  process.exit(1);
}

const port: number = parseInt(envPort);

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
