var response = require('./response'),
    page = require('./page');


module.exports = function (Model, config) {

    var getConfig = function () {
        return config && config;
    };

    var create = function (req, res) {
        var data = req.body,
            object = new Model(data);

        object.save(function (err, object) {
            response.reply(err, res, object, 201);
        });
    };

    var find = function (req, res) {
        var id = req.params.id;

        Model.findOne({_id: id}, function (err, object) {
            response.reply(err, res, object);
        });
    };

    var retrieve = function (req, res) {
        var pageRequest = page.pageRequest(req.query),
            query = config && config.filter(req.query) || {};

        Model.find(query)
            .skip(pageRequest.startIndex)
            .limit(pageRequest.count)
            .exec(function (err, objects) {
                if (err) {
                    response.processError(err, res);
                    return;
                }

                Model.count(query, function (err, count) {
                    var dataPage = page.makePage(objects, count/ pageRequest.count);
                    response.reply(err, res, dataPage);
                });
            });

    };

    var remove = function (req, res) {
        var id = req.params.id;
        Model.remove({_id: id}, function (err, count) {
            response.reply(err, res, {
                removed:  count
            });
        });
    };

    var update = function (req, res) {
        var data = req.body,
            id = req.params.id;
        delete data._id;

        Model.update({_id: id}, data, function (err, count) {
            data._id = id;
            response.reply(err, res, data);
        })
    };

    return {
        create: create,
        update: update,
        remove: remove,
        find: find,
        retrieve: retrieve
    };

};

