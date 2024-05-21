import { Sequelize } from "sequelize";

const dbConnection = new Sequelize({
    dialect: 'mssql',
    port: 49928,
    database: 'saep_db',
    username: 'saep_user',
    password: 'saep_1234',
    host: "SNCCH02LABF10\\TEW_SQLEXPRESS"
})

export { dbConnection };