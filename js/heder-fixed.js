document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav'); // Certifique-se de que o ID está correto
    const header = document.querySelector('.header');

    // Função para verificar a posição de rolagem e adicionar/remover a classe
    function handleScroll() {
        // Altura do header
        const headerHeight = header.offsetHeight;
        // Posição de rolagem atual
        const scrollPosition = window.scrollY;

        // Se a posição de rolagem for maior que a altura do header
        if (scrollPosition > headerHeight) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    }

    // Adicionando o evento de scroll
    window.addEventListener('scroll', handleScroll);
});