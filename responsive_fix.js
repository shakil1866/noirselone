const fs = require('fs');

let file = 'c:\\\\Users\\\\shaki\\\\Downloads\\\\Salone\\\\Salone\\\\index.html';
let content = fs.readFileSync(file, 'utf8');

// Navbar brand padding for mobile
content = content.replace('navbar-brand bg-primary py-4 px-5 me-0', 'navbar-brand bg-primary py-4 px-3 px-lg-5 me-0');

// Hero title scaling for mobile
content = content.replace('class="display-1 mb-4 animated slideInLeft"', 'class="display-4 display-md-1 mb-4 animated slideInLeft"');
content = content.replace('class="display-1 animated slideInLeft"', 'class="display-4 display-md-1 animated slideInLeft"');

// Reduce "About" section numbers on mobile
// Just add responsiveness
content = content.replace('<h1 class="display-5" data-toggle="counter-up">4.9</h1>', '<h1 class="display-5 display-md-4" data-toggle="counter-up">4.9</h1>');

// Address spacing
content = content.replace('<p class="mb-2"><i class="fa fa-map-marker-alt me-2"></i>Aurus Mall, Opposite Secretariat Road, Swaraj Nagar, Sarumotoria, Guwahati, Assam 781006, India</p>',
    '<p class="mb-2 pe-3"><i class="fa fa-map-marker-alt me-2"></i>Aurus Mall, Opposite Secretariat Road, Swaraj Nagar, Sarumotoria, Guwahati, Assam 781006, India</p>');

// Ensure footer copyright doesn't overflow
content = content.replace('&copy;<a class="border-bottom" href="#">NOIR SALON</a> All Right Reserved.', '&copy; <a class="border-bottom" href="#">NOIR SALON</a>. All Rights Reserved.');

fs.writeFileSync(file, content);
console.log("Updated index.html responsiveness");
