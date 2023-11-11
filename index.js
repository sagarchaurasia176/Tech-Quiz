const quesitonsWordIncreased = document.querySelector('#numberIncrements');
const container = document.querySelector('#main-container');
const playBtn = document.querySelector(".btn");
const Answer = document.querySelector('.answer');
//question DATA

const Questions = document.querySelector('.Questions');
let optionsA = document.querySelector('.QptionsA');
let optionsB = document.querySelector('.QptionsB');
let optionsC = document.querySelector('.QptionsC');
let optionsD = document.querySelector('.QptionsD');


// QUESTIONS ARRAY OF OBJ 
const JsQuestions = [{
        Questions: "what is js ?",
        optionsA: "It is a language",
        optionsB: "It is used to display additional features into website",
        optionsC: "It is used to improve logical building",
        optionsD: "All the above",
    },

    {
        Questions: "what is let in js ?",
        optionsA: "It is basically a variable",
        optionsB: "It is used to stored the variable",
        optionsC: "It is tell about any variable properties",
        optionsD: "All the above",
    },


    {
        Questions: "How do you check if a variable is an array in JavaScript? ",
        optionsA: "isArray(x) ",
        optionsB: " x.isArray() ",
        optionsC: "x instanceof Array ",
        optionsD: " typeof Array ",
    },

    {
        Questions: "What are the main types of loops available in JavaScript?",
        optionsA: "for loop, do...while loop, while loop",
        optionsB: " for loop, do...until loop, while loop",
        optionsC: "for loop, while loop, repeat...until loop",
        optionsD: "All the above",
    },
    {
        Questions: "What is the purpose of the break statement in a loop? ",
        optionsA: " It stops the execution of the loop immediately. ",
        optionsB: " It skips the current iteration and moves to the next one. ",
        optionsC: " It restarts the loop from the beginning. ",
        optionsD: "All the above",
    },
]

//question and answer fucntions
function questionsAndAnswer() {
    let check = "this is working "
}

//start btn
playBtn.addEventListener("click", () => {
    container.style.display = "block";
    playBtn.style.display = "none";
})

// scored Btn listener 
let btn = document.getElementById('scoreBtn');
btn.addEventListener('click', () => {
        alert("comming soon !");
    }

)