"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }const multer = require("multer")
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

const upload = multer(_multerConfig2.default).single("foto")
var _Fotos = require('../models/Fotos'); var _Fotos2 = _interopRequireDefault(_Fotos);


class FotoController {
    store(req, res) {



        return upload(req, res, async (err) => {
            if (err) return res.status(400).json({ errors: err.code })

            const { originalname, filename } = req.file;

            const { aluno_id } = req.body


            try {
                console.log(aluno_id)
                const foto = await _Fotos2.default.create({ filename, originalname, aluno_id })


                res.json(foto)

            } catch (e) {
                res.status(404).json({ rrors: ["aluno nao existe"] })
            }

        })


    }

  



    


}

exports. default = new FotoController();