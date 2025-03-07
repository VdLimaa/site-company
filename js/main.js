"use strict"

// Funções do menu mobile
function showMenu() {
  document.getElementById("navLinks").style.right = "0";
  document.querySelector(".fa-times").style.display = "block";
  document.querySelector(".fa-bars").style.display = "none";
}

function hideMenu() {
  document.getElementById("navLinks").style.right = "-200px";
  document.querySelector(".fa-times").style.display = "none";
  document.querySelector(".fa-bars").style.display = "block";

  // Fecha todos os dropdowns ao fechar o menu
  document.querySelectorAll('.has-dropdown').forEach(item => item.classList.remove('active'));
}

// Fixar Header e controlar botão "Voltar ao Topo" (sub.header)
window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  const subHeader = document.querySelector('.sub-header');
  const backToTop = document.getElementById('backToTop');

  if (subHeader) {
    const subHeaderHeight = subHeader.offsetHeight;

    if (window.scrollY >= subHeaderHeight - 1) {
      nav.classList.add('fixed');
      if (backToTop) backToTop.classList.add('show');
    } else {
      nav.classList.remove('fixed');
      if (backToTop) backToTop.classList.remove('show');
    }
  }
});

// Fixar Header e controlar botão "Voltar ao Topo" (header)
window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  const subHeader = document.querySelector('.header');
  const backToTop = document.getElementById('backToTop');

  if (subHeader) {
    const subHeaderHeight = subHeader.offsetHeight;

    if (window.scrollY >= subHeaderHeight - 1) {
      nav.classList.add('fixed');
      if (backToTop) backToTop.classList.add('show');
    } else {
      nav.classList.remove('fixed');
      if (backToTop) backToTop.classList.remove('show');
    }
  }
});

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  const faTimes = document.querySelector(".fa-times");
  const faBars = document.querySelector(".fa-bars");
  const navLinks = document.getElementById('navLinks');
  const dropdownItems = document.querySelectorAll('.has-dropdown');

  if (faTimes) faTimes.style.display = "none"; // Esconder botão de fechar por padrão

  // Adicionar eventos de clique no menu mobile
  if (faBars) faBars.addEventListener("click", showMenu);
  if (faTimes) faTimes.addEventListener("click", hideMenu);

  // Gerencia o dropdown no mobile
  dropdownItems.forEach(item => {
    const dropdownLink = item.querySelector("a");

    if (dropdownLink) {
      dropdownLink.addEventListener('click', function (event) {
        if (window.innerWidth <= 960) {
          event.preventDefault();
          item.classList.toggle('active');
        }
      });
    }
  });

  // Fecha o dropdown se clicar fora
  document.addEventListener('click', function (event) {
    if (navLinks && !navLinks.contains(event.target)) {
      dropdownItems.forEach(item => item.classList.remove('active'));
    }
  });

  // Botão "Voltar ao Topo"
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Botão copiar telefone
  window.copyAndNotify = function (phoneNumber) {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        const notification = document.getElementById('notification');
        if (notification) {
          notification.textContent = 'Número copiado!';
          notification.classList.add('show');
          setTimeout(() => notification.classList.remove('show'), 1000);
        }
      })
      .catch(err => console.error('Erro ao copiar: ', err));
  };

  // Captura de e-mail com EmailJS
  window.emailCatch = function () {
    let emailValue = document.getElementById("emailFooter")?.value;
    if (!emailValue) {
      alert("Por favor, insira um e-mail!");
      return;
    }

    let parms = { email: emailValue };
    emailjs.send("service_myyu0e7", "template_09oxatb", parms)
      .then(() => {
        alert("E-mail enviado com sucesso!");
        document.getElementById("emailFooter").value = "";
      })
      .catch(error => alert("Falha ao enviar o e-mail: " + error));
  };

  // Botão "Orçamento"
  const btnOrcamento = document.getElementById("btn-orcamento");
  if (btnOrcamento) {
    btnOrcamento.addEventListener("click", function () {
      window.open("https://www.redestina.com.br/#pricing", "_blank");
    });
  }
});



