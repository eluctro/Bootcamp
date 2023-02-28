var form = document.getElementById('contactForm');
form.addEventListener('submit',function(e) {
    e.preventDefault();


var name = form.elements.nameField.value;
var email = form.elements.emailField.value;
var message = form.elements.msgField.value;

var database=firebase.database();


database.ref('contacts').push({
        name: name,
        email: email,
        message: message,
    }
);


form.reset();

alert('thank you for your message!, we appreciate your feedback and will look into it and get back to you shortly');
});
