require ("dotenv").config ();


module.exports = {
    host: "130.211.230.172",
    dialect: "mariadb",
    port: 3306,
    username:"root",
    password: "dfgdf11234",
    database:"Escola",
    define: {
        timeStamps: true
    },
    dialectOptions: {
        connectTimeout: 60000
      },
}

