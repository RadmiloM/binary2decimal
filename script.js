const inputNumber = document.querySelector(`#binary-number`)
const submitButton = document.querySelector(`.submit-button`);
const errorMessage = document.querySelector(`#error-message`);

inputNumber.addEventListener('click', function () {
    if (/[^01]/.test(inputNumber.value)) {
        console.log('not valid number');
    }
})