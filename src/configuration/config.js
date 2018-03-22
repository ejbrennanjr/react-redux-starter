if(process.env.NODE_ENV === 'production') {
    module.exports = require('../configuration/config.prod');
} else {
    module.exports = require('../configuration/config.dev');
}