// code2.js
function makeReservation() {
    // Get input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Validate phone number format
    const phoneRegex = /^010-[0-9]{4}-[0-9]{4}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number in the format 010-XXXX-XXXX.');
        return;
    }
    
    // Validate reservation time
    const currentTime = new Date();
    const selectedTime = new Date(`${date}T${time}`);
    if (selectedTime < currentTime) {
        alert('Reservation time cannot be in the past.');
        return;
    }
    
    // Add reservation data to table
    const tableBody = document.querySelector('#reservationTable tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${time}</td>
        <td>${name}</td>
        <td>${phone}</td>
    `;

    // Add reservation info below the table
    const reservationInfo = document.getElementById('reservationInfo');
    reservationInfo.innerHTML = `
        <h2>Reservation Information</h2>
        <p>Name: ${name}</p>
        <p>Phone Number: ${phone}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
    `;
}
