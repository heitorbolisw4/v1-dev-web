const quiz = [
  {
    question: "O que distingue a Realidade Virtual da Realidade Aumentada?",
    options: [
      "RV substitui o mundo real por um ambiente digital completo, RA sobrepõe elementos virtuais.",
      "RV é usada apenas em jogos, RA apenas em aplicativos de mapa.",
      "RA requer headset especial, RV funciona só no celular.",
    ],
    answer: 0,
  },
  {
    question: "Qual dispositivo é típico de Realidade Virtual?",
    options: [
      "Smartphone com app de filtros",
      "Headset 3D dedicado (ex.: Oculus Rift)",
      "Televisão 4K comum",
    ],
    answer: 1,
  },
  {
    question: "Onde a RA é comumente utilizada?",
    options: [
      "Simuladores de voo imersivos",
      "Aplicativos de compras para experimentar produtos virtualmente",
      "Filmes 360 graus para cinema",
    ],
    answer: 1,
  },
];

let current = 0;
const startBtn = document.getElementById("startQuiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quizBox");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  quizBox.style.display = "block";
  showQuestion();
});

function showQuestion() {
  const q = quiz[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(i) {
  const isCorrect = i === quiz[current].answer;
  feedbackEl.textContent = isCorrect ? "Correto!" : "Resposta errada.";

  Array.from(optionsEl.children).forEach((btn) => (btn.disabled = true));

  if (current < quiz.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    nextBtn.textContent = "Reiniciar Quiz";
    nextBtn.style.display = "inline-block";
  }
}

nextBtn.addEventListener("click", () => {
  if (current < quiz.length - 1) {
    current++;
  } else {
    current = 0;
  }
  nextBtn.style.display = "none";
  showQuestion();
});

const title = "Realidade Virtual e Realidade Aumentada";
const titleElement = document.getElementById("title");
let index = 0;
console.log(title.length);

function typeWriter() {
  if (index < title.length) {
    titleElement.textContent += title.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;
