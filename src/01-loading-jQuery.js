(function () {
    'use strict';

    // These are all equivalent

    $(document).ready(function () {
        console.log('$(document).ready()', 'the content is loaded');
    });

    jQuery(function () {
        console.log('jQuery()', 'the content is loaded');
    });

    $(function () {
        console.log('$()', 'the content is loaded');
    });
})();

(function ($) {
    'use strict';

    // This is how you can guard against jQuery not being available

    if (!$) {
        throw Error('$ is not defined');
    }


})(jQuery);

(function () {
    'use strict';

    $(function () {
        // Document content is loaded
        // We can work with our selectors and functions in here
        
        doSomething();
    });

    // But we can define our functions out here
    function doSomething() {
        // Use jQuery to get some elements
        // $('.row').hide();
    }
})();

// doSomething() is not defined outside our IIFE