//create a form validation with js for the following input fields: nameField, emailField,messageField


 const nameField = document.getElementById('nameField');
    const emailField = document.getElementById('emailField');
    const messageField = document.getElementById('messageField');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    }
    );


    function checkInputs() {
        if (nameField.value.trim() === '') {
            alert('Name cannot be blank');
        }
        else if (emailField.value.trim() === '') {
            alert('Email cannot be blank');
        }
        else if (messageField.value.trim() === '') {
            alert('Message cannot be blank');
        }
        else {
            alert('Form submitted successfully');
        }

    }



