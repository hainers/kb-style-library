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

    $('.js-user-badge').on('click', function() {
        $('.user-badge-dropdown').toggleClass('user-badge-dropdown--open')
    });

    $('.js-sidebar-toggle').on('click', function() {
        $('.js-category-sidebar').addClass('category-sidebar--open');
    });

    $('.js-sidebar-close').on('click', function() {
        $('.js-category-sidebar').removeClass('category-sidebar--open');
    });

    $('.js-filter-sidebar-toggle').on('click', function() {
        $('.js-filter-sidebar').addClass('category-sidebar--open');
    });

    $('.js-filter-sidebar-close').on('click', function() {
        $('.js-filter-sidebar').removeClass('category-sidebar--open');
    });


    // Login page id, mobile-id,smart-id actions


    // Modal init functionality
    MicroModal.init();
    console.log(MicroModal);
});