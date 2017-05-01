(function () {
    'use strict';

    $(function () {
        selectById();

        selectByClass();

        selectByAttribute();

        selectByCSSSelector();

        selectMultipleCSSSelectors();

        selectByPsuedoSelector();
    });

    function selectById() {
        var emailEl = $('#email_id');
        console.log('<input id="email_id" />', emailEl);
    }

    function selectByClass() {
        var formGroups = $('.form-group');
        console.log('<... class="form-group">', formGroups);
    }

    function selectByAttribute() {
        var favFoods = $('[name="fav_foods"]');
        console.log('<... name="fav_foods">', favFoods);
    }

    function selectByCSSSelector() {
        var messageLabel = $('.control-label[for="message_id"]');
        console.log('<... class="control-label" for="message_id">', messageLabel);
    }

    function selectMultipleCSSSelectors() {
        var radiosAndCheckboxes = $('[type="radio"], [type="checkbox"]');
        console.log('<... type="radio"> or <... type="checkbox">', radiosAndCheckboxes);
    }

    function selectByPsuedoSelector() {
        var firstRow = $('.row:first');
        console.log('<... class="row">', firstRow);
    }

    // Tips

    // minimum specificity possible

    // Save selection in variable if the same selection is used in multiple places
})();