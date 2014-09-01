var processError = function (err, res) {

    if (err.name === 'ValidationError'){
        return res.json(400, {
            messagesValidation: err.errors
        });
    }

    if (err.code == 11000 ) {
        var campo =/\w+(?=_)/.exec(err.message);
        campo = campo[0] + " já existe";
        return res.json(400, {
            message: campo
        });
    }

    return res.json(400, {
        message: err.message
    });
}

exports.reply = function (err, res, dados, status) {
    if (err) {
        processError(err, res);
    }

    res.json(status || 200, dados);
};

exports.processError = processError;