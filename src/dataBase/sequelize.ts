import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

if (!dbName || !dbUser || !dbPassword || !dbHost) {
    console.error("As variáveis de ambiente do banco de dados não estão configuradas corretamente.");
    process.exit(1);
}

const connect: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mariadb',
})

export default connect