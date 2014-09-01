var router = new require('express').Router(),
    templateController = require('./templateController');

module.exports = function () {
    router.get('/:dir/:name', templateController.render)
    router.get('/', templateController.index);
    return router;
};
