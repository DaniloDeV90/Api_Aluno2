require ("dotenv").config ();


module.exports = {

   
    host: "localhost",
    dialect: "mariadb",
  
    port: 3001,
    username:"root",
    password: "dfgdf11234",
    database:"Escola",
    define: {
        timesStamps: true
    },
    dialectOptions: {
        connectTimeout: 60000
      },
}

