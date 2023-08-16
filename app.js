import express from "express";
import dotenv from "dotenv"
dotenv.config ()



const  {resolve} = require ("path")
import tokenRouters from "./src/routes/TokensRouters"
import userRouter from "./src/routes/usersRoutes"
require ("./config/Associations")
import AlunosRoutes from "./src/routes/AlunosRoutes";
import fotoRoutes from "./src/routes/FotosRoutes";
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
        this.app.use (express.static (resolve (__dirname, "uploads")))

    }

    routes() {
        this.app.use ("/tokens/", tokenRouters)
        this.app.use ("/users/", userRouter)
        this.app.use ("/aluno/", AlunosRoutes)
        this.app.use ("/foto/", fotoRoutes)
    }

  
    

}

export default new App().app