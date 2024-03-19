import fastify from "fastify";


const port: number = 3000

const server = fastify()



server.get('/listen', async (req, res) => {
    return res.status(200).send(`Vc entrou na rota de escutar: ${port}`)
 })


server.listen({ port: port }, (err) => {
    if (err) {
        console.log(err);
        process.exit(1)
    }

    console.log(`Escutando na porta: ${port}`);

})