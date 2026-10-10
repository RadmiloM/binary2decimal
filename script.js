const inputNumber = document.querySelector(`#binary-number`)
const submitButton = document.querySelector(`.submit-button`);

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(inputNumber.value);
})