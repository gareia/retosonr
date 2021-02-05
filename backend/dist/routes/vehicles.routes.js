"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var vehicles_controller_1 = require("../controllers/vehicles.controller");
var router = express_1.Router();
router.get('/vehicles', vehicles_controller_1.getVehicles);
router.post('/vehicles', vehicles_controller_1.createVehicles);
router.get('/vehicles/:id', vehicles_controller_1.getVehicle);
router.put('/vehicles/:id', vehicles_controller_1.updateVehicle);
router.delete('/vehicles/:id', vehicles_controller_1.deleteVehicle);
exports.default = router;