// Inject Navbar on every page load
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar navbar-expand-lg navbar-dark bg-primary fixed-top';
  navbar.innerHTML = `
    <div class="container">
      <a class="navbar-brand" href="index.html"><i class="fas fa-bus"></i> SmartBus</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          <li class="nav-item"><a class="nav-link" href="booking.html">Book Ticket</a></li>
          <li class="nav-item"><a class="nav-link" href="tracking.html">Track Bus</a></li>
          <li id="auth-section" class="nav-item d-flex align-items-center">
            <a class="nav-link" href="login.html">Login</a>
          </li>
        </ul>
      </div>
    </div>
  `;
  document.body.insertAdjacentElement('afterbegin', navbar);

  // Check simulated login
  const role = localStorage.getItem('userRole');
  if (role) {
    const authSection = document.getElementById('auth-section');
    authSection.innerHTML = `
      <a class="nav-link me-2" href="${role}-dashboard.html">Dashboard</a>
      <button class="btn btn-outline-light btn-sm" onclick="logout()">Logout</button>
    `;
  }
});

// Simulated Login Function (call from login.html)
function simulateLogin(email, password, role) {
  if (email && password && ['passenger', 'driver', 'admin'].includes(role)) {
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email); // For mock personalization
    alert(`Welcome, ${role}! Redirecting to dashboard...`);
    window.location.href = `${role}-dashboard.html`;
  } else {
    alert('Invalid credentials. Try email: test@example.com, password: 123, role: passenger');
  }
}

// Logout
function logout() {
  localStorage.clear();
  alert('Logged out successfully!');
  window.location.href = 'index.html';
}

// Mock data loader (for dashboards)
function loadMockData(containerId, data) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = data.map(item => `<li class="list-group-item">${item}</li>`).join('');
  }
}