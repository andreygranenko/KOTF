'use strict';

const question = document.querySelector('#question'),
      pageAnswers = document.querySelectorAll('.choose'),
      choosesParent = document.querySelector('.chooses__wrapper'),
      nextBtn = document.querySelector('#nxt'),
      curr = document.querySelector('#curr');

const questions = [
    'What excites you the most when thinking about the future of technology?',
     'How do you prefer to solve problems?',
     'What do you enjoy reading about the most?',
     'What type of challenges do you find most interesting?',
     'What would you rather do in your free time?',
     ' Which career path appeals to you the most?',
     'What type of content do you enjoy watching or discussing?',
     "What's your ideal workspace like?",
     ' How do you approach solving problems?',
     'What fascinates you the most in the world of STEM?'
    ];

    const answers = [
        {
            a: 'Exploring new scientific discoveries (Science)',
            b: 'Developing cutting-edge software and applications (Technology)',
            c: 'Designing innovative gadgets and devices (Engineering)',
            d: 'Solving complex mathematical algorithms (Math)'
        },
        {
            a: 'Conducting experiments and gathering empirical data (Science)',
            b: 'Utilizing advanced technology and tools (Technology)',
            c: 'Designing practical solutions and systems (Engineering)',
            d: 'Formulating and solving mathematical equations (Math)'
        },
        {
            a: 'Scientific breakthroughs and discoveries (Science)',
            b: 'Technological advancements and innovations (Technology)',
            c: 'Engineering marvels and architectural feats (Engineering)',
            d: 'Mathematical theories and proofs (Math)'
        },
        {
            a: 'Exploring the mysteries of the natural world (Science)',
            b: 'Developing new software or applications (Technology)',
            c: 'Building and designing structures or machines (Engineering)',
            d: 'Solving complex mathematical puzzles (Math)'
        },
        {
            a: 'Conducting scientific experiments or research (Science)',
            b: 'Exploring the latest technological gadgets (Technology)',
            c: 'Working on DIY engineering or construction projects (Engineering)',
            d: 'Solving challenging math problems or puzzles (Math)'
        },
        {
            a: 'Biologist or environmental scientist (Science)',
            b: 'Software developer or IT specialist (Technology)',
            c: 'Civil engineer or architect (Engineering)',
            d: 'Mathematician or data analyst (Math)'
        },
        {
            a: 'Nature documentaries and scientific theories (Science)',
            b: 'Tech reviews and the latest gadgets (Technology)',
            c: 'Engineering documentaries and construction projects (Engineering)',
            d: 'Mathematical concepts and theorems (Math)'
        },
        {
            a: 'A laboratory filled with scientific equipment (Science)',
            b: 'A tech-savvy environment with cutting-edge devices (Technology)',
            c: 'A workshop equipped for building and creating (Engineering)',
            d: 'A quiet office with whiteboards for mathematical thinking (Math)'
        },
        {
            a: 'By conducting scientific experiments and observations (Science)',
            b: 'By using technology to prototype and innovate (Technology)',
            c: 'By applying engineering principles to design solutions (Engineering)',
            d: 'By formulating and solving mathematical equations (Math)'
        },
        {
            a: 'Discovering new scientific phenomena and facts (Science)',
            b: 'Exploring the latest technological advancements (Technology)',
            c: 'Designing and building innovative structures and systems (Engineering)',
            d: 'Engaging in abstract mathematical reasoning (Math)'
        }
    ];
    

// console.log(answers[0].a)
let current = 0;
// curr.textContent = `0${current + 1}/10`;

function changeCurr() {
    if (current == 10) {
        curr.textContent = `${current}/10`;
        nextBtn.textContent = 'Show Results';
    } else {
        curr.textContent = `0${current}/10`;
    }
}

function showQuestion() {
    question.textContent = questions[current];
    pageAnswers.forEach((item, i) => {
        item.textContent = answers[current][Object.keys(answers[current])[i]];
    });
    // console.log(questions[current]);
    // Object.values(answers[current]).forEach(item => console.log(item));
    current ++;
    changeCurr();
}

showQuestion();

choosesParent.addEventListener('click', e => {
    if (e.target.tagName == 'SPAN') {
        pageAnswers.forEach(item => {
            if (item.classList.contains('active') && item != e.target) {
                item.classList.remove('active');
                e.target.classList.add('active');
            } else {
                e.target.classList.add('active');
            }
        });
    }
});

let science = 0,
    tech = 0,
    engineering = 0, 
    math = 0;


nextBtn.addEventListener('click', e => {
    pageAnswers.forEach(item => {
        if (item.classList.contains('active')) {
            if (item.textContent == answers[current - 1].a) {
                science++;
                console.log('a', science, tech, engineering, math);
            } else if (item.textContent == answers[current - 1].b) {
                tech++;
                console.log('b', science, tech, engineering, math);
            } else if (item.textContent == answers[current - 1].c) {
                engineering++;
                console.log('c', science, tech, engineering, math);
            } else if (item.textContent == answers[current - 1].d) {
                math++;
                console.log('d', science, tech, engineering, math);
            }
            item.classList.remove('active');
        }
    });
    if (nextBtn.textContent == 'Show Results') {
        const maxVariable = (science >= tech && science >= engineering && science >= math) ? 'science' :
                   (tech >= science && tech >= engineering && tech >= math) ? 'tech' :
                   (engineering >= science && engineering >= tech && engineering >= math) ? 'engineering' : 'math';
        if (maxVariable == 'engineering') {
            window.location.href = '/professions/engineer';
            // nextBtn.innerHTML = `
            // <a href="/professions/engineer">
            // Show Results
            // </a>
            // `;
        }
    } else {
        showQuestion();
    }
});

console.log(Math.max(science, tech, engineering, math));
// pageAnswers.forEach(item => {
//     item.addEventListener('click', e => {
//         item.classList.toggle('active');
//     });
// });
// for (let i = 0; i < Object.keys(answers[0]).length; i++) {
//     console.log(answers[0][Object.keys(answers[0])[i]]);
// }