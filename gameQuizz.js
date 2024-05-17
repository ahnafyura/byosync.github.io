const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Bagian sel prokariotik yang berfungsi sebagai alat pelindung bakteri terhadap pengaruh ular yang merugikan dirinya adalah.......",
        choice1: "DINDING SEL",
        choice2: "KAPSUL",
        choice3: "FLAGELA",
        choice4: "SITOPLASMA",
        answer: 2
    },
    {
        question: "Pilus pada sel prokariotik memiliki rambut halus yang menonjol dari dinding sel yang tersusun atas protein, fungsi rambut halus tersebut adalah",
        choice1: "Sebagai alat gerak",
        choice2: "Sebagai tempat organel sel dan skeleton",
        choice3: "Sebagai penghubung saat bakteri melakukan konjungsi",
        choice4: "Menyimpan informasi genetika berupa DNA",
        answer: 3
    },
    {
        question: "Bagian sel prokariotik yang berfungsi sebagai menyimpan informasi genetika berupa DNA adalah......",
        choice1: "Membran plasma",
        choice2: "Ribosom",
        choice3: "Sitoplasma",
        choice4: "Inti plasma",
        answer: 4
    },
    {
        question: "Didalam Sel Prokariotik terdapat ribosom yang tersusun atas ARN, fungsi dari Ribosom adalah",
        choice1: "Sebagai tempat organel sel dan sitoskeleton",
        choice2: "Menagatur zat yang dapat keluar dan masuk ke dalam sel",
        choice3: "Sebagai tempat sintesis protein",
        choice4: "Sebagai pelindung sel",
        answer: 3
    },
    {
        question: "Bagian sel yang tersusun atas filamen, Hook (sudut) adalah......",
        choice1: "Flagella",
        choice2: "Pilus",
        choice3: "Membran plasma",
        choice4: "Dinding sel",
        answer: 1
    },
    {
        question: "Organel yang merupakan tempat berlangsungnya respirasi sel adalah",
        choice1: "Lisosom",
        choice2: "Nukleus",
        choice3: "Mitokondria",
        choice4: "Ribosom",
        answer: 3
    },
    {
        question: "Nukleoplasma tersusun atas protein, enzim airi, ion, dan asam inti yang berfungsi sebagai....",
        choice1: "Menyimpan informasi genetika berupa DNA",
        choice2: "Sebagai tempat sintesis protein / pemebentuk protein",
        choice3: "Menyintesis protein yang akan digunakan dalam sel",
        choice4: "Sebagai tempat untuk mengolah berbagai enzim",
        answer: 4
    },
    {
        question: "Organel yang berfungsi aktif pada pembelahan sel dan hanya terdapat pada sel hewan adalah",
        choice1: "Kromosom",
        choice2: "Ribosom",
        choice3: "Sentrosom",
        choice4: "Lisosom",
        answer: 3
    },
    {
        question: "RE kasar memiliki permukaan membran yang ditempati ribosom, sedangkan RE halus memiliki permukaan",
        choice1: "Yang miring",
        choice2: "Yang ditempati ribosom",
        choice3: "Yang tidak ditempati ribosom",
        choice4: "Yang ditempati fragena",
        answer: 3
    },
    {
        question: "Bagian sel hewan yang berfungsi untuk mencerna zat makanan, mencerna bakteri dan virus yang masuk ke dalam sel adalah",
        choice1: "Sentriol",
        choice2: "Lisosom",
        choice3: "Badan golgi",
        choice4: "RE Halus, RE Kasar",
        answer: 2
    },
    {
        question: "Sitoplasma memiliki fungsi sebagai",
        choice1: "Sistem rangka",
        choice2: "Membentuk permukaan sel",
        choice3: "Menghasilkan energi dalam bentuk ATP",
        choice4: "Sebagai tempat berlangsunnya fotosintesis",
        answer: 3
    },
    {
        question: "Kloroplas hanya terdapat pada",
        choice1: "Sel hewan",
        choice2: "Sel prokariotik",
        choice3: "Sel tumbuhan",
        choice4: "Semua benar",
        answer: 3
    },
    {
        question: "Jika sel hidup ditemukan di bumi juga dijumpai di planet lain yang tidak ada oksigen, bagian manakah dari organel sel yang kemungkinan tidak terdapat dalam sel organisme tersebut",
        choice1: "Membran sel",
        choice2: "Nukleus",
        choice3: "Mitokondria",
        choice4: "Ribosom",
        answer: 3
    },
    {
        question: "Berikut ini adalah bagian dari sel tumbuhan kecuali",
        choice1: "Kloroplas",
        choice2: "Plasmodesmata",
        choice3: "Mitokondria",
        choice4: "Flagella",
        answer: 4
    },
    {
        question: "Bagian sel tumbuhan yang berfungsi menghubungkan sitoplasma antar sel adalah",
        choice1: "Membran inti",
        choice2: "Sitoplasma",
        choice3: "Sitoskeleton",
        choice4: "Plasmodesmata",
        answer: 4
    }
];

const addQuestion = (newQuestion) => {
    questions.push(newQuestion);
};

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 15;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
}