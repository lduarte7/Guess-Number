const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let stats = document.getElementById('stats');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptNumber: 0,
    numberDraw: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDraw = Guess.numberDraw();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor dentro do campo!')
        return;
    };

    updateAttempt(attempt, ++Guess.attemptNumber);

    if (numberDraw == kick) {
        playAgain();
        stats.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        stats.style.color = '#fff';
        clear();
    } else if (numberDraw > kick){
        stats.innerHTML = 'O número é maior!';
        stats.style.color = '#de4251';
        clear();
    } else if (numberDraw < kick){
        stats.innerHTML = 'O número é menor!';
        stats.style.color = '#de4251';
        clear();
    }

    
};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear(){
    document.getElementById('kick').value = '';
}
