// Dark/Light Mode Toggle
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.innerHTML = '🌞'; // Change to light mode icon
    } else {
        this.innerHTML = '🌙'; // Change to dark mode icon
    }
});
