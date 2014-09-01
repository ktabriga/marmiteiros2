var Marmita = require('./Marmita'),
    Controller = require('../lib/Controller');

var MarmitaController = function () {

};

MarmitaController.prototype = new Controller(Marmita);

module.exports =  new MarmitaController();

