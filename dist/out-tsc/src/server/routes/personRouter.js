"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var person_model_1 = require("../models/person.model");
// From https://github.com/RobinBuschmann/sequelize-typescript-example/blob/master/lib/routes/movies.ts
exports.people = express_1.Router();
// Basic get all route
exports.people.get('/', function (req, res, next) {
    person_model_1.Person
        .findAll()
        .then(function (data) {
        return res.json(data);
    })
        .catch(function (err) {
        console.log(err);
        return err;
    });
});
//# sourceMappingURL=personRouter.js.map