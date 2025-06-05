document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre demande ! Nous vous contacterons rapidement.');
    this.reset();
});
