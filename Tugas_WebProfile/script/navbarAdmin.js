document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-content").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});

function toggleNavbar() {
    const navbar = document.getElementById('navbar');

    navbar.classList.toggle('-translate-x-full');
}