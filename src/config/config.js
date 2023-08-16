require ("dotenv").config ();


module.exports = {

   
    host: "localhost",
    dialect: "mariadb",
  
    port: 3306,
    username:"root",
    password: "dfgdf11234",
    database:process.env.DATABASE_NAME,
    define: {
        timesStamps: true
    },
    dialectOptions: {
        connectTimeout: 60000
      },
}

