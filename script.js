// Add smooth scrolling to the navigation links
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = this.getAttribute('href');
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add form submission handling
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Send form data to the server or perform other actions
  });
  