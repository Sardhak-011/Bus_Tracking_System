// Generate fake QR on confirmation (using CDN library)
function generateQR(ticketId) {
  const qrDiv = document.getElementById('qr-code');
  if (qrDiv && typeof QRCode !== 'undefined') {
    qrDiv.innerHTML = ''; // Clear
    new QRCode(qrDiv, {
      text: `Ticket ID: ${ticketId} - SmartBus Ride`,
      width: 200,
      height: 200,
      colorDark: '#007BFF',
      colorLight: '#ffffff'
    });
  }
}

// Simulate booking submission
function simulateBooking() {
  const from = document.getElementById('from').value || 'Default From';
  const to = document.getElementById('to').value || 'Default To';
  const seats = document.getElementById('seats').value || 1;
  const layer = document.getElementById('layer').value || 'fixed';
  if (from && to && seats > 0) {
    const ticketId = 'TICKET-' + Date.now(); // Fake ID
    localStorage.setItem('lastTicket', JSON.stringify({ id: ticketId, from, to, seats, layer })); // Mock storage
    window.location.href = 'booking-confirmation.html?ticket=' + ticketId;
  } else {
    alert('Please fill in route and seats.');
  }
}
