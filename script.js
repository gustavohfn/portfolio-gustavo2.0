
document.addEventListener("DOMContentLoaded", function () {
  const text = "Sou desenvolvedor focado em HTML, CSS e JavaScript, criando soluções modernas, responsivas e com foco em experiência do usuário. Trabalho também com automação utilizando IA e criação de projetos através do Emergent."
  const typingElement = document.getElementById("typing-text");

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 40);
    }
  }

  typeEffect();

const faders = document.querySelectorAll(".fade");

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.3 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

});



