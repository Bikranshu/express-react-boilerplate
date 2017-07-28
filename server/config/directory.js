var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

const directory = {
    root: rootPath,
    modelsDir: rootPath + '/models',
    viewsDir: rootPath + '/views',
    assetsDir: rootPath + '/public'
};

export default directory;

