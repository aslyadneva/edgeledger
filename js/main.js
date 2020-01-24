
// Google Map

function initMap() {

  const location = {lat: -34.397, lng: 150.644}; 

  const map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 8
  });

  const marker = new google.maps.Marker({position: location, map: map}); 
}

// Scrolling Navbar
const nav = document.querySelector('#navbar'); 

window.addEventListener('scroll', working); 

function working () {
  if (window.scrollY >= 60) {
    nav.classList.add('navbar-opaque'); 
  }  else {
    nav.classList.remove('navbar-opaque'); 
  }
}

// Smooth Scrolling with JQuery 
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault(); 

    const hash = this.hash; 

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      }, 
      800
    ); 
  }
}); 


