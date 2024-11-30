
var questions = [
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName;",
        opt2: "let variableName;",
        opt3: "const variableName;",
        opt4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following is used to create an object in JavaScript?",
        opt1: "{}",
        opt2: "[]",
        opt3: "()",
        opt4: "< >",
        ans: "{}"
    },
    {
        question: " Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseInteger",
        opt3: "parseNumber()",
        opt4: "parseFloat()",
        ans: "parseInt()"
    },
    {
        question: " What is the correct way to write a comment in JavaScript?",
        opt1: "// This is a comment",
        opt2: "# This is a comment",
        opt3: "/* This is a comment */",
        opt4: "!-- This is a comment --",
        ans: "// This is a comment"
    },
    {
      question: 'Where is the correct place to insert a JavaScript?',
      opt1: ' at the end of body',
      opt2: ' after html tag',
      opt3: 'before end of body',
      opt4: 'all of above',
      ans: 'all of above'
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      opt1: 'alert hello world',
      opt2: 'alert{hello world}',
      opt3: 'alert("hello world")',
      opt4: 'alert(helo world)',
      ans: 'alert("hello world")'
    },
    {
      question: 'How do you create a function in JavaScript?',
      opt1: 'function; myfunc',
      opt2: 'function myfunc()',
      opt3: 'function= myfunc',
      opt4: 'func myfunc{}',
      ans: 'function myfunc()'
    },
    {
      question: 'How to write an IF statement in JavaScript?',
      opt1: 'if i=5',
      opt2: 'if{i===5}',
      opt3: 'if i:5',
      opt4: 'if (i===5){}',
      ans: 'if (i===5){}'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        opt1: 'script',
        opt2: 'javascript',
        opt3: 'scripting',
        opt4: 'js',
        ans: 'script'
    }
]
var index = 0;
var result = 0

function renderQues() {
    var container = document.getElementById("container");
    var option = document.getElementsByName("option");
    for (var i = 0; i < option.length; i++) {

        if (option[i].checked) {
            if (questions[index - 1].ans === option[i].value) {
                result++
            }
            console.log(option[i].value, questions[index - 1].ans, result);
        }
    }
    if (!questions[index]) {
        calculateResult()
        var resultContainer = document.getElementById("result-container");
        resultContainer.style.display = "block";
        container.style.display = "none";

        console.log("Result: " + result);
        return;
    }
    container.innerHTML = `
    <h3 class="text-center text-body-dark">JavaScript Quiz</h3>

     <p class="question">${index + 1}
     ${questions[index].question}</p><hr/>
        <div class="options"> <label for="opt1"><input type="radio" name="option" id="opt1" value="${questions[index].opt1}"> 
        ${questions[index].opt1}</label></div>
        <div class="options"> <label for="opt2"><input type="radio" name="option" id="opt2" value="${questions[index].opt2}">
        ${questions[index].opt2}</label></div>
        <div class="options"> <label for="opt3"><input type="radio" name="option" id="opt3" value="${questions[index].opt3}">
        ${questions[index].opt3}</label></div>
        <div class="options"> <label for="opt4"><input type="radio" name="option" id="opt4" value="${questions[index].opt4}">
        ${questions[index].opt4}</label></div>
         <button id="prev" class="m-2 btn btn-dark" onclick="previousQuestion()">Previous</button>
        <button id="next" class="m-2 btn btn-dark" onclick="nextQuestion()">Next</button>
`
    var prevButton = document.getElementById("prev");
    var nextButton = document.getElementById("next");

    function calculateResult() {
        var score = document.getElementById("score");
        var percentage = ((result / questions.length) * 100).toFixed(2)

        if (percentage > 70) {
            score.innerHTML = "Congratulations! You passed the test.</br> You attempted " + result + " correct answers out of " + questions.length + " questions. </br> Your score is " + percentage + "%";
        } else {
            score.innerHTML = "Sorry! You failed the test.</br> You attempted " + result + " correct answers out of " + questions.length + " questions. </br> Your score is " + percentage + "%";
            score.style.color = "#dc3545";
        }
    }
    prevButton.disabled = (index == 0);
    if (index == questions.length - 1) {
        nextButton.innerHTML = "Submit";
        nextButton.classList.add("btn-danger")
        nextButton
        console.log(questions.length);
    }
}
renderQues()
function nextQuestion() {
    index++;
    renderQues();
}
function previousQuestion() {
    if (index > 0) {
        index--;
        renderQues();
    }
}
