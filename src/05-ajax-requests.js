(function ($, Handlebars, X2JS) {
    'use strict';

    if (!$ || !Handlebars || !X2JS) {
        throw Error('Required libraries not available');
    }

    var userBlockTemplate = '';
    var catBlockTemplate = '';

    var resultContainer = {};

    var x2js = new X2JS();

    $(documentReadyCallback);

    function documentReadyCallback() {
        compileHandlebarsTemplates();

        setupClickHandlers();
    }

    function compileHandlebarsTemplates() {
        var userBlockTemplateSource = $('#user-block-template').html();
        var catBlockTemplateSource = $('#cat-block-template').html();

        userBlockTemplate = Handlebars.compile(userBlockTemplateSource);
        catBlockTemplate = Handlebars.compile(catBlockTemplateSource);
    }

    function setupClickHandlers() {
        var catHeader = $('#cat-header');
        var userHeader = $('#user-header');

        var catShow = $('#show-cats');
        var userShow = $('#show-users');

        resultContainer = $('.row.marketing');

        catHeader.hide();

        catShow.click(function () {
            $(this).addClass('active');
            userShow.removeClass('active');

            catHeader.show();
            userHeader.hide();

            resultContainer.empty();
        });

        userShow.click(function () {
            $(this).addClass('active');
            catShow.removeClass('active');

            catHeader.hide();
            userHeader.show();

            resultContainer.empty();
        });

        $('#load-cats').click(function () {
            resultContainer.empty();
            $.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=20&size=small', undefined, ajaxSuccessCallbackCats, 'xml');
        });

        $('#load-users').click(function () {
            resultContainer.empty();
            var offset = 10000 + (10000 * Math.random());
            $.get('https://api.github.com/users?since=' + offset, undefined, ajaxSuccessCallbackGithub);
        });
    }

    function ajaxSuccessCallbackGithub(data) {
        data.forEach(createUserBlock);
    }

    function createUserBlock(user) {
        var userBlock = userBlockTemplate(user);

        resultContainer.append(userBlock);
    }

    function ajaxSuccessCallbackCats(data) {
        var response = x2js.xml_str2json(data.firstChild.innerHTML);

        response.data.images.image.forEach(createCatBlock);
    }

    function createCatBlock(cat) {
        var catBlock = catBlockTemplate(cat);

        resultContainer.append(catBlock);
    }
})(window.jQuery, window.Handlebars, window.X2JS);
