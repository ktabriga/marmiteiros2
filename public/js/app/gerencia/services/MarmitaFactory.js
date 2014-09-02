define([

], function () {

    function MarmitaFactory($resource) {
        var Marmita = $resource('/api/marmitas/:id', {id: '@id'}, {

        });

        return Marmita;
    }

    return ['$resource', MarmitaFactory];
});