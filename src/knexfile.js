require('dotenv').config();
const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DB_NAME;

module.exports={
    development:{
        client:'mysql',
        connection:{
            host: host,
            user: user,
            database: database,
            password: password
        }
    },
    production:{
        client:'mysql',
        connection:{
            host: host,
            user: user,
            database: database,
            password: password
        }
    }
}