//contact.js

    function handleSubmit(event) {
        event.preventDefault();
        document.getElementById('contactFormContainer').style.display = 'none';
        document.getElementById('successMessage').classList.remove('d-none');
    }

    function showContactForm() {
        document.getElementById('contactFormContainer').style.display = 'block';
        document.getElementById('successMessage').classList.add('d-none');
    }