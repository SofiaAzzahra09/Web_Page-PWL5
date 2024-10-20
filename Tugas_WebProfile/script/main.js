// untuk hamburger button
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
      
menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

// untuk tahun di footer
document.getElementById('year').textContent = new Date().getFullYear();

const scrollToTopButton = document.getElementById('scroll-to-top');

// untuk menampilkan/menyembunyikan scroll button
 window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});