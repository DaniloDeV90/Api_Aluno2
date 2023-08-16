"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenControllers = require('../controllers/TokenControllers'); var _TokenControllers2 = _interopRequireDefault(_TokenControllers);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
const router = new (0, _express.Router) ();


router.post ("/", _TokenControllers2.default.store)

exports. default = router;
