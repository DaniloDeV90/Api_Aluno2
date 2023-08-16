"use strict";require ("dotenv").config ();


module.exports = {
    dialect: "mariadb",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    define: {
        timestamps: true
    },
    dialectOptions: {
        connectTimeout: 60000
      },
}

