const buttonNumbers = document.getElementsByName('data-number');
const buttonOperations = document.getElementsByName('data-operation');
const buttonResult = document.getElementsByName('data-result')[0];
const buttonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var currentOperation = '';
var previousOperation = '';
var operation = undefined;

buttonNumbers.forEach(function(button) {
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    })
});

buttonOperations.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText);
    })
});

buttonResult.addEventListener('click', function(){
    calculate();
    updateDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    updateDisplay();
});

function addNumber(number){
    currentOperation = currentOperation.toString() + number.toString();
    updateDisplay();
}

function updateDisplay(){
    result.value = currentOperation;
}
function clear(){
    currentOperation = '';
    previousOperation = '';
    operation = undefined;
}

function selectOperation(symbolOperation){
    if(currentOperation === '') return;
    if(previousOperation !== ''){
        calculate();
    }
    operation = symbolOperation.toString();
    previousOperation = currentOperation;
    currentOperation = '';
}

function calculate(){
    var calculation;
    const previous = parseFloat(previousOperation);
    const current = parseFloat(currentOperation);
    if(isNaN(previous) || isNaN(current)) return;
    switch(operation){
        case '+':
            calculation = previous + current;
            break;
        case '-':
            calculation = previous - current;
            break;
        case 'x':
            calculation = previous * current;
            break;
        case '/':
            calculation = previous / current;
            break;
        default:
            return;
    }
    currentOperation = calculation;
    operation = undefined;
    previousOperation = '';
}

clear();