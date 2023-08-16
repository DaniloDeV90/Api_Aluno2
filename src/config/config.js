require ("dotenv").config ();


module.exports = {
    database:"Escola",
    username:"root",
    password: "dfgdf11234",
    host: "localhost",
    dialect: "mariadb",
    port: 3306,
    database:"Escola",
    define: {
        timeStamps: true
    },
    dialectOptions: {
        connectTimeout: 60000
      },
}

