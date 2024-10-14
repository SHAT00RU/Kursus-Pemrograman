document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Terima kasih, ${name}! Kami akan segera menghubungi Anda melalui email: ${email}.`);
    
    // Reset form setelah submit
    document.getElementById('contactForm').reset();
});
