export function getQueryParam(data) {
    if (typeof(data) !== 'object') {
        return '?' + data;
    }
    var str = [];
    for (var p in data) {
        if (data[p] && data.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
        }
    }
    return '?' + str.join('&');
}

export function getPathParam(...args) {
    var params = [];

    for (var a in args) {
        params.push(args[a]);
    }
    return params.join('/');
}