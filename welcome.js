'use strict';

module.exports = function (message) {

    if (NODE_ENV == 'development') {
        console.log('file welcome');
    }
    
    alert(`Welcome ${message}`);
};