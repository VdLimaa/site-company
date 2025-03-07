"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Selecionar os elementos
    const backArrow = document.getElementById('backArrow');
    const homeBtn = document.getElementById('homeBtn');

    // Adicionar evento para a seta de voltar
    if (backArrow) {
        backArrow.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir comportamento padrão do link
            window.history.back(); // Voltar à página anterior
        });
    }

    // Adicionar evento para o botão Voltar ao Início
    if (homeBtn) {
        homeBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir comportamento padrão do link
            window.location.href = 'index.html'; // Redirecionar para a página inicial
        });
    }
});