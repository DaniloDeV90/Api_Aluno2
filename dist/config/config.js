"use strict";require ("dotenv").config ();


module.exports = {
    host: "localhost",
    dialect: "mariadb",
    port: 3306,
    username:"root",
    password: "dfgdf11234",
    define: {
        timeStamps: true
    },
    dialectOptions: {
        connectTimeout: 60000
      },
}

