define([

], function () {

    function MarmitaController(Marmita) {
        this.Marmita = Marmita;
        this.iniciar();
    }

    MarmitaController.prototype = {
        iniciar: function () {
            var self = this;

            this.Marmita.get(function (pagina) {
                self.marmitas = pagina.values;
            });
        }
    };

    return ['MarmitaFactory', MarmitaController];
});