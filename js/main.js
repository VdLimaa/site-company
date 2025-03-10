"use strict";

// Variáveis globais para rastrear o toque
let touchStartX = 0;
let touchMoveX = 0;

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

  // Se não for mobile, aplica a lógica de fixação baseada no scroll
  if (window.innerWidth > 960) {
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
  } else {
    // No mobile, mostra o botão "Voltar ao Topo" se o scroll for maior que 100px (ajustável)
    if (backToTop && window.scrollY > 100) {
      backToTop.classList.add('show');
    } else if (backToTop) {
      backToTop.classList.remove('show');
    }
  }
});

// Fixar Header e controlar botão "Voltar ao Topo" (header)
window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  const header = document.querySelector('.header');
  const backToTop = document.getElementById('backToTop');

  // Se não for mobile, aplica a lógica de fixação baseada no scroll
  if (window.innerWidth > 960) {
    if (header) {
      const headerHeight = header.offsetHeight;

      if (window.scrollY >= headerHeight - 1) {
        nav.classList.add('fixed');
        if (backToTop) backToTop.classList.add('show');
      } else {
        nav.classList.remove('fixed');
        if (backToTop) backToTop.classList.remove('show');
      }
    }
  } else {
    if (backToTop && window.scrollY > 100) {
      backToTop.classList.add('show');
    } else if (backToTop) {
      backToTop.classList.remove('show');
    }
  }
});

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  const faTimes = document.querySelector(".fa-times");
  const faBars = document.querySelector(".fa-bars");
  const navLinks = document.getElementById('navLinks');
  const dropdownItems = document.querySelectorAll('.has-dropdown');
  const nav = document.getElementById('mainNav');

  if (window.innerWidth <= 960) {
    nav.classList.add('fixed');
  }

  if (faTimes) faTimes.style.display = "none";

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

  // Bloquear deslize horizontal no mobile
  if (window.innerWidth <= 960) {
    document.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
      touchMoveX = e.touches[0].clientX;
      const deltaX = touchMoveX - touchStartX;

      if (navLinks && navLinks.style.right === '-200px') {
        e.preventDefault(); // Impede qualquer movimento horizontal
      } else if (navLinks && navLinks.style.right === '0px' && deltaX < -50) {
        hideMenu();
      }
    }, { passive: false });

    document.addEventListener('touchend', () => {
      touchStartX = 0;
      touchMoveX = 0;
    });
  }
});