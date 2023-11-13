const quesitonsWordIncreased = document.querySelector('#numberIncrements');
const container = document.querySelector('#main-container');
const playBtn = document.querySelector(".btn");
//question DATA

let correct;
// QUESTIONS ARRAY OF OBJ 
const JsQuestions = [{
        Questions: "what is js ?",
        optionsA: "It is a language",
        optionsB: "It is used to display additional features into website",
        optionsC: "It is used to improve logical building",
        optionsD: "All the above",
        correct: 'D'
    },

    {
        Questions: "what is let in js ?",
        optionsA: "It is basically a variable",
        optionsB: "It is used to stored the variable",
        optionsC: "It is tell about any variable properties",
        optionsD: "All the above",
        correct: 'D'
    },


    {
        Questions: "How do you check if a variable is an array in JavaScript? ",
        optionsA: "isArray(x) ",
        optionsB: " x.isArray() ",
        optionsC: "x instanceof Array ",
        optionsD: " typeof Array ",
        correct: 'D'
    },

    {
        Questions: "What are the main types of loops available in JavaScript?",
        optionsA: "for loop, do...while loop, while loop",
        optionsB: " for loop, do...until loop, while loop",
        optionsC: "for loop, while loop, repeat...until loop",
        optionsD: "All the above",
        correct: 'A'
    },
    {
        Questions: "What is the purpose of the break statement in a loop? ",
        optionsA: " It stops the execution of the loop immediately. ",
        optionsB: " It skips the current iteration and moves to the next one. ",
        optionsC: " It restarts the loop from the beginning. ",
        optionsD: "All the above",
        correct: 'A'
    },
]


//questions part

// options parts

// let optionsA = document.querySelector('.optionsA');
// let optionsB = document.querySelector('.optionsB');
// let optionsC = document.querySelector('.optionsC');
// let optionsD = document.querySelector('.optionsD');
let index = 1;
let quesBox = document.querySelector('.Questions');
let options = document.querySelectorAll('.check');

const loadQues = () => {
    const data = JsQuestions[index];
    quesBox.innerHtml = `{data.Questions}`;
    //   options parts 
    options[0].innerHTML = data.optionsA;
    options[1].innerHTML = data.optionsB;
    options[2].innerHTML = data.optionsC;
    options[3].innerHTML = data.optionsD;
}
loadQues();

//submit click fucntions
// const submitBtn = document.querySelector("#submitBtn");

// submitBtn.addEventListener('click', () => {
//     console.log(optionsClicked());
// })

// function optionsClicked() {
//     options.forEach((input) => {
//         if (input.checked) {
//             return input.value;
//         }

//     })

// }





//start btn
playBtn.addEventListener("click", () => {
    container.style.display = "block";
    playBtn.style.display = "none";
})

// scored Btn listener 
let btn = document.getElementById('scoreBtn');
btn.addEventListener('click', () => {


})