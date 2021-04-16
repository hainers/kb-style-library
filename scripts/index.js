document.addEventListener('DOMContentLoaded', function(event) {

    // Register page acount type switch/radio btns
    $('#kbfirma').on('change', function() {
        $('.kb-register-company').removeClass('d-none');
        $('.kb-register-private').addClass('d-none');
    });

    $('#kbera').on('change', function() {
        $('.kb-register-company').addClass('d-none');
        $('.kb-register-private').removeClass('d-none');
    });

    $(".js-kb-search-form__toggle, .js-kb-search-form__toggle-mobile").on('click', function() {
        $('.kb-search-form__hidden-fields--detailed').toggleClass('open');
    });


    var $searchTabs = $('.kb-search-form-tabs__item');
    $searchTabs.on('click', function() {
        $searchTabs.removeClass('kb-search-form-tabs__item--active');
        $(this).addClass('kb-search-form-tabs__item--active');
    });

    $('.js-kb-search-form__toggle-collapse').on('click', function() {
        $('.kb-search-form__hidden-fields').removeClass('open');
    });
    $('.js-kb-search-form__toggle-saved').on('click', function() {
        $('.kb-search-form__hidden-fields--saved').addClass('open');
    });


    // Login page id, mobile-id,smart-id actions


    // Modal init functionality
    MicroModal.init();
    console.log(MicroModal);
});