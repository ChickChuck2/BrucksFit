function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
}

// Fecha o menu ao clicar em um link (mobile)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav').classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });
});