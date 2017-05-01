// Strict mode off - this === window at the highest level
(function () {
    window.addEventListener('DOMContentLoaded', callbackNotUsingBind);

    window.addEventListener('DOMContentLoaded', callbackUsingBind.bind(this));

    function callbackNotUsingBind(event) {
        console.log('Strict mode off (unbound) ', this, event);
    }

    function callbackUsingBind(event) {
        console.log('Strict mode off (bound) ', this, event);
    }
})();

// Strict mode on - this === unddefined at the highest level
(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded', callbackNotUsingBind);

    window.addEventListener('DOMContentLoaded', callbackUsingBind.bind(this));

    function callbackNotUsingBind(event) {
        console.log('Strict mode on (unbound) ', this, event);
    }

    function callbackUsingBind(event) {
        console.log('Strict mode on (bound) ', this, event);
    }
})();

// Strict mode on - using bind with 'new'
(function () {
    'use strict';

    function windowHelper() {
        if (!this) {
            throw Error("windowHelper called without 'new'");
        }

        console.log("Just created a new windowHelper ", this);

        this.domContentLoadedCallback = function (e) {
            console.log("The DOM is ready! ", this);
        };
    }

    var simpleWindowHelper = new windowHelper();

    window.addEventListener('DOMContentLoaded', simpleWindowHelper.domContentLoadedCallback);
    window.addEventListener('DOMContentLoaded', simpleWindowHelper.domContentLoadedCallback.bind(simpleWindowHelper));
})();



// Do we really need jQuery?
(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded', function () {
        // Happy case
        var rows = document.querySelectorAll('.row');

        rows.forEach(function addClass(element) {
            element.className += ' vanilla-class-row';
        });
    });
})();

// Yes, it might help...
(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded', function () {
        // More realistic case
        var elements = document.querySelectorAll('.form-group');

        if (elements.length === 0) {
            return;
        }

        // if we have a single DOM element, make it an array to simplify behavior
        if (elements.tagName) {
            elements = [elements];
        }

        // add class to all chosen elements
        elements.forEach(function addClass(element) {
            // if class is not already found
            if ((' ' + element.className + ' ').indexOf(' ' + 'vanilla-class-group' + ' ') < 0) {
                // add class
                element.className += ' ' + 'vanilla-class-group';
            }
        });
    });
})();