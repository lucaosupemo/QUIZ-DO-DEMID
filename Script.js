

const quizData = [
    {
        question: "Se o cliente de um aluno solicitar o desenvolvilmento de um website com notícias atualizadas e tirinhas, atrás de qual professor o aluno deve ir?",
        a: "Thiago",
        b: "Alberto",
        c: "Ivan",
        d: "Paulo",
        correct: "d"
    },
    {
        question: "Qual o nome do ilustrador famoso na internete que saiu do DEMID'?",
        a: "Paulo Moreira",
        b: "Paulo Henriqueira",
        c: "Paulo Pereira",
        d: "Paulo Silveira",
        correct: "a"
    },
    {
        question: "Em qual parte do DEMID os alunos mais se reúnem quando querem ''relaxar'' entre aulas?",
        a: "Dentro do próprio banheiro",
        b: "Atrás do DEMID",
        c: "Na frente do DEMID",
        d: "Em qualquer lugar do DEMID, pois o curso possui uma estrutura que aproxima o aluno da natureza que o cerca",
        correct: "d"
    },
    {
        question: "Qual é o icônico cumprimento inicial que o Professor Paulo inicia vários de seus materiais didáticos?",
        a: "Opa galera, tranquilo?",
        b: "Oiii gentee",
        c: "Saudações, jovens",
        d: "Faaaaaala pessoaaaal, beleezura?",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestionIndex];
    const questionEl = document.createElement('div');
    questionEl.classList.add('question');
    questionEl.innerHTML = `<h2>${currentQuizData.question}</h2>
                            <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
                            <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
                            <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
                            <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>`;
    quiz.appendChild(questionEl);
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer;
    answers.forEach(ans => {
        if (ans.checked) {
            answer = ans.value;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    quiz.innerHTML = '';

    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
    } else {
        resultsContainer.innerHTML = `<h2>Você acertou ${score} de ${quizData.length} perguntas!</h2>`;
    }
});

loadQuiz();
let time = 60;
const timerEl = document.createElement('div');
timerEl.id = 'timer';
document.body.prepend(timerEl);

function startTimer() {
    const countdown = setInterval(() => {
        time--;
        timerEl.textContent = `Tempo restante: ${time}s`;

        if (time <= 0) {
            clearInterval(countdown);
            alert('Tempo esgotado!');
            submitBtn.click();
        }
    }, 1000);
}

startTimer();
