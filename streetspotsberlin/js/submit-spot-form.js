﻿window.onload = function() {
    document.getElementById('submit-spot').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_24nvo4a', 'template_qov1g95', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}