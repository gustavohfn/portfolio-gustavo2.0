document.addEventListener("DOMContentLoaded", function () {

  const text = `Sou Desenvolvedor Front-End em constante evolução, focado na criação de interfaces responsivas e experiências intuitivas.\n
Utilizo JavaScript e ferramentas de IA para desenvolver soluções que unem tecnologia, eficiência e impacto real.\n\n Atualmente desenvolvendo projetos autorais e aprimorando minhas habilidades em integração de APIs e automação de processos.`;

  const typingElement = document.getElementById("typing-text");

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 40);
    }
  }

  if (typingElement) {
    typeEffect();
  }

});






