document.addEventListener('DOMContentLoaded', function(event) {

    // Register page acount type switch/radio btns
    var $radioFirma = document.querySelector("#kbfirma");
    if ($radioFirma !== null) {
        $radioFirma.addEventListener("change", function() {
            document.querySelector('.kb-register-company').classList.remove('d-none');
            document.querySelector('.kb-register-private').classList.add('d-none');
        });
    }
    var $radioEra = document.querySelector("#kbera");
    if ($radioEra !== null) {
            $radioEra.addEventListener("change", function() {
            document.querySelector('.kb-register-company').classList.add('d-none');
            document.querySelector('.kb-register-private').classList.remove('d-none');
        });
    }

    // Login page id, mobile-id,smart-id actions


    // Modal init functionality
    MicroModal.init();
    console.log(MicroModal);
});