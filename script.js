(function () {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // If the form is valid, remove all forms and display a thank-you message
                removeFormsAndShowThankYou();
                
                // Prevent the default form submission behavior
                event.preventDefault();
            }

            form.classList.add('was-validated');
        }, false);
    });

    function removeFormsAndShowThankYou() {
        // Remove all forms
        document.getElementById('forms').style.display = 'none';
        var formsContainer = document.querySelector('.container.d-flex.justify-content-center');
        document.getElementById('thankYou').style.display = 'block';
    }
})();
