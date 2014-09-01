exports.makePage = function (itens, count ) {
    return {
        pageCount: Math.ceil(count),
        values: itens
    }
};

exports.pageRequest = function (query) {
    var start  = query.start || 0 ,
        count  = query.count || 0;

    if (start > 0) {
        start -= 1;
    }

    return {
        start: start,
        count: count,
        startIndex: start * count
    };
};