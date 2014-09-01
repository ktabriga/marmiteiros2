var marmitaController = require("./marmitaController");

module.exports = function (router) {
    router.route('/marmitas')
        .get(marmitaController.retrieve)
        .post(marmitaController.create);

    router.route('/marmitas/:id')
        .put(marmitaController.update)
        .get(marmitaController.find)
        .delete(marmitaController.remove);
};