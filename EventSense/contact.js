document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const eventType = document.getElementById('eventType').value;
    const date = document.getElementById('date').value;
    const venue = document.getElementById('venue').value;
    const city = document.getElementById('city').value;

    const message = `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nEvent Type: ${eventType}\nDate: ${date || 'N/A'}\nVenue: ${venue || 'N/A'}\nCity: ${city}`;

    document.getElementById('message').textContent = message;
    document.getElementById('message').style.color = '#4CAF50';
    document.getElementById('message').style.fontWeight = 'bold';
});
