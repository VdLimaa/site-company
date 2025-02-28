document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("c428_m0OO36S2ukqb"); // Inicializa EmailJS corretamente

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Previne envio padrão do formulário
        sendMail();
    });
});

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_myyu0e7", "template_3btred7", params)
        .then(function (response) {
            alert("E-mail enviado com sucesso!");
            console.log("SUCCESS!", response);

            // Limpar os campos após o envio
            document.getElementById("contact-form").reset();
        })
        .catch(function (error) {
            alert("Erro ao enviar o e-mail. Verifique o console para mais detalhes.");
            console.error("EmailJS Error:", error);
        });
}


