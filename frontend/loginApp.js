'use strict';

/*window.onload
 * Uncaught TypeError: Cannot set property 'onclick' of null
 *
 * The element you were trying to find wasn’t in the DOM when your script ran.
 * The position of your DOM-reliant script can have a profound effect upon its behavior.
 * The document is parsed from top to bottom. Elements are added to the DOM and scripts are executed as they're encountered.
 * This means that order matters. Typically, scripts can't find elements which appear later in the markup because those elements haven't yet been added to the DOM.
 */
window.onload = () => {
    document.getElementById('login').onclick = () => {
        // [] can be empty or can contain './login'
        require.ensure([], (require) => {
            let login = require('./login');

            login('123');
        })
    };
};