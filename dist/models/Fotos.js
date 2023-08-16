"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }const { DataTypes, Sequelize } = require("sequelize")
var _appconfig = require('../config/app.config'); var _appconfig2 = _interopRequireDefault(_appconfig);
const sequelize = require("../config/sequelize")

const Aluno = sequelize.define("fotos", {
    filename: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
            notEmpty: {
                msg: "Campo nao pode ser nulo "
            }

        }
    },
    originalname: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {

            notEmpty: {
                msg: "Campo nao pode ser nulo "
            }


        }
    },
    aluno_id: {
        type: DataTypes.INTEGER,
        validator: {
            notEmpty: {
                msg: "Sem id"
            }
    
        }
    },
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${_appconfig2.default.url}/images/${this.getDataValue('filename')}`;
      }
    }


})

module.exports = Aluno