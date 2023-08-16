require ("dotenv").config ();


module.exports = {

    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_NAME_DATA,
  
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    define: {
        timesStamps: true
    },
    dialectOptions: {
        connectTimeout: 60000
      },
}

