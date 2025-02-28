"use strict"

document.addEventListener("DOMContentLoaded", function () {
    // Pega o título da página uma vez ao carregar
    const pageTitle = document.title; // Título da página sem encoding

    // Configuração do WhatsApp
    const phoneNumber = "+5513981127677";
    const whatsappMessage = "Olá! Gostaria de mais informações sobre " + pageTitle + ".";
    const whatsappButton = document.querySelector(".whatsapp-icon");

    if (whatsappButton) {
        whatsappButton.setAttribute("href", "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(whatsappMessage));
    }

    // Inicializa EmailJS
    emailjs.init("c428_m0OO36S2ukqb");

    // Configuração do formulário
    document.querySelector(".contato-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Previne envio padrão do formulário
        sendMail(pageTitle); // Passa o título da página para a função sendMail
    });
});

function sendMail(pageTitle) {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: pageTitle, // Usa o título da página como subject
        message: document.getElementById("message").value
    };

    emailjs.send("service_myyu0e7", "template_3btred7", params)
        .then(function (response) {
            alert("E-mail enviado com sucesso!");
            console.log("SUCCESS!", response);

            // Limpar os campos após o envio
            document.querySelector(".contato-form").reset();
        })
        .catch(function (error) {
            alert("Erro ao enviar o e-mail. Verifique o console para mais detalhes.");
            console.error("EmailJS Error:", error);
        });
}