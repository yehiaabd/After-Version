    document.addEventListener("DOMContentLoaded", () => {
        const sendButton = document.getElementById('sendButton');
        sendButton.addEventListener('click', function () {

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please the All fields');
                return;
            }

            location.reload();
        });
    });
