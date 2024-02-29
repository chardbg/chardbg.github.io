document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substr(1);
            document.querySelectorAll('section').forEach((section) => {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });
});
