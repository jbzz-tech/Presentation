const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');

  const color = slides[i].getAttribute('data-color');
  document.body.style.background = `linear-gradient(135deg, ${color}, #2c3e50)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

showSlide(index);

// Data e hora
function updateDateTime() {
  const now = new Date();
  document.getElementById('datetime').textContent = "Data e Hora: " + now.toLocaleString('pt-BR');
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Visitantes online via CountAPI
const visitorCounter = "josue_tolerancia_profissional";
fetch(`https://api.countapi.xyz/hit/${visitorCounter}/visits`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('visitors').textContent = `Visitantes Online: ${data.value}`;
  })
  .catch(() => {
    document.getElementById('visitors').textContent = `Visitantes Online: 1`;
  });