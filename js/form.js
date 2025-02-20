//Forms E-mail

// document.getElementById("btn-submit").addEventListener("click", function sendMail(){
//     let parms = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//         subject: document.getElementById("subject").value
//     }

//     emailjs.send("service_myyu0e7", "template_3btred7", parms)
//     .then(function(response) {
//         alert("E-mail enviado com sucesso!");

//         document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             document.getElementById("subject").value = "";
//     })
//     .catch(function(error) {
//         alert("Falha ao enviar o e-mail: " + error);
//     });
// });

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário
    sendMail();  // Chama a função de envio do e-mail
});

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value
    }

    emailjs.send("service_myyu0e7", "template_3btred7", parms)
    .then(function(response) {
        alert("E-mail enviado com sucesso!");

        // Limpar os campos após o envio
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
    })
    .catch(function(error) {
        alert("Falha ao enviar o e-mail: " + error);
    });
}

