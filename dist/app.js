"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config ()


var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
const  {resolve} = require ("path")
var _TokensRouters = require('./routes/TokensRouters'); var _TokensRouters2 = _interopRequireDefault(_TokensRouters);
var _usersRoutes = require('./routes/usersRoutes'); var _usersRoutes2 = _interopRequireDefault(_usersRoutes);
require ("./config/Associations")
var _AlunosRoutes = require('./routes/AlunosRoutes'); var _AlunosRoutes2 = _interopRequireDefault(_AlunosRoutes);
var _FotosRoutes = require('./routes/FotosRoutes'); var _FotosRoutes2 = _interopRequireDefault(_FotosRoutes);
var _HomeRoutes = require('./routes/HomeRoutes'); var _HomeRoutes2 = _interopRequireDefault(_HomeRoutes);




class App {
    constructor() {
        this.app = _express2.default.call(void 0, );
        this.middlewares();
        this.routes();
    
    }

    middlewares() {
        this.app.use (_cors2.default.call(void 0, ))
        this.app.use (_helmet2.default.call(void 0, ))
        this.app.use(_express2.default.urlencoded({ extended: true }))
        this.app.use(_express2.default.json())
        this.app.use (_express2.default.static (resolve (__dirname, "uploads")))

    }

    routes() {
        this.app.use ("/", _HomeRoutes2.default)
        this.app.use ("/tokens/", _TokensRouters2.default)
        this.app.use ("/users/", _usersRoutes2.default)
        this.app.use ("/aluno/", _AlunosRoutes2.default)
        this.app.use ("/foto/", _FotosRoutes2.default)
    }

  
    

}

exports. default = new App().app