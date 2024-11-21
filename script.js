

// Hamburger toggle
const togglebtn = document.querySelector('.hamburger'); // Select the first element with class "hamburger"
const navLinks = document.getElementById("nav-links");
const aboutContent = document.querySelector('.about-content'); // Select the first element with class "about-content"

togglebtn.addEventListener('click', () => {
  // Toggle the menu
  navLinks.classList.toggle('show');

  // Adjust margin-top based on menu state
  if (navLinks.classList.contains('show')) {
    aboutContent.style.marginTop = '280px';

  } else {
    aboutContent.style.marginTop = '0';
    aboutContent.style.transition='0.3s ease-in'
  }
});


// Get all progress circles
const progressCircles = document.querySelectorAll('.progress');

// Loop through each circle and set the progress
progressCircles.forEach(circle => {
  // Get the percentage from the data attribute
  const percentage = parseInt(circle.getAttribute('data-percentage'));

  // Calculate the dashoffset based on the percentage
  const circumference = 282.74; // Circumference of the circle (2 * PI * 45)
  const offset = circumference - (percentage / 100) * circumference;

  // Set the stroke-dashoffset to create the progress effect
  circle.style.strokeDasharray = circumference;  // Set the stroke-dasharray to the full circumference
  circle.style.strokeDashoffset = offset;        // Set the offset to the progress
});