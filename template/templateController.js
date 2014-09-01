exports.render = function (req, res) {
    var dir = req.params.dir,
        name = req.params.name;

    res.render('partials/'+dir + '/' + name);
};

exports.index = function (req, res) {
    res.render('index');
}