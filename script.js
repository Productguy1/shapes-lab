// Entrance animations are handled purely via CSS in animations.css.
// No JS needed — staggered fade-up applied with .animate-1 through .animate-9 classes.

// Pricing footer — randomly pick a city to simulate "last visitor" social proof
(function () {
  var cities = [
    'San Francisco, US', 'New York, US', 'Austin, US', 'Seattle, US',
    'London, UK', 'Berlin, Germany', 'Amsterdam, Netherlands', 'Stockholm, Sweden',
    'Paris, France', 'Lisbon, Portugal', 'Barcelona, Spain', 'Dublin, Ireland',
    'Toronto, Canada', 'Vancouver, Canada', 'Sydney, Australia', 'Melbourne, Australia',
    'Tokyo, Japan', 'Singapore', 'Dubai, UAE', 'Mumbai, India', 'Lagos, Nigeria', 'Accra, Ghana', 'Enugu, Nigeria', 
    'Bangalore, India', 'Vadodara, India', 'São Paulo, Brazil', 'Cape Town, South Africa'
  ];
  var el = document.getElementById('visitor-location');
  if (el) {
    el.textContent = cities[Math.floor(Math.random() * cities.length)];
  }
})();

// FAQ accordion — toggle open/close on click, one item open at a time
document.querySelectorAll('.faq-question').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.closest('.faq-item');
    var isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
