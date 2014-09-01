var marmita = require("./marmita/marmitaRouter"),
    route =  new require("express").Router();

module.exports = function () {
    marmita(route);
    return route;
};

