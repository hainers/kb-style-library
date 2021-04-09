document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector("#kbfirma").addEventListener("change", function() {
        document.querySelector('.kb-register-company').classList.remove('d-none');
        document.querySelector('.kb-register-private').classList.add('d-none');
    });

    document.querySelector("#kbera").addEventListener("change", function() {
        document.querySelector('.kb-register-company').classList.add('d-none');
        document.querySelector('.kb-register-private').classList.remove('d-none');
    });
});