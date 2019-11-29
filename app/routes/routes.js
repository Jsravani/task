




var express = require("express");
var route = express.Router();
const rooms = require('../controllers/controller');


route.post('/tenants', rooms.create);

route.get('/tenants', rooms.find);

route.put('/tenants', rooms.update);

route.delete('/tenants', rooms.delete);

module.exports = route;