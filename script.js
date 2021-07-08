const quizData =[
    //Question1
    {
        question:'How old Chok Dee is ?',
        a: '3 years old',
        b: '1 and a half year old',
        c: '2 years old',
        d: '2 years and 7 months',
        correct: 'd'
    },
    //Question2
    {
        question : 'What is Chok-Dee name mean?',
        a: 'Rich',
        b: 'Successful',
        c: 'Lucky',
        d: 'Giant',
        correct: 'c'
    },
    //Question3
    {
        question : 'How old Zelda is ',
        a: '3 years old',
        b: '1 and a half year old',
        c: '2 years old',
        d: '2 years and 7 months',
        correct: 'd'

    },
    //Question4
    {
        question : 'What is Zelda name came from ?',
        a: 'Game',
        b: 'Cartoon',
        c: 'Song',
        d: 'None and above',
        correct: 'a'
    },
    //Question5
    {
        question : 'What breeds Chok Dee is ?',
        a: 'Irish wolfhound Mixed',
        b: 'English Cream Golden retrieve & labrador retriever mixed',
        c: 'Great Pyrenees Poodle mixed',
        d: 'Labrador retriever Poodle mixed',
        correct: 'c'
    },
 //Question6
    {
        question : 'What breeds Zelda is ?',
        a: 'Golden retrieve',
        b: 'English Cream Golden retrieve & American Golden retrieve',
        c: 'Great Pyrenees & English Cream Golden retrieve mixed',
        d: 'Labrador retriever & English Cream Golden retrieve mixed',
        correct: 'b'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});