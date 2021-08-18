function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log('got 3 digit and calling agin', pin);
        return getPin();
    }
}

function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-Pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {

        const previocalcnput = calcInput.value;
        const ncalcInput = previocalcnput + number
        calcInput.value = ncalcInput;
    }

});

function veryFied() {
    const Pin = document.getElementById('display-pin').value;
    const number = document.getElementById('type-number').value;
    const successMessage = document.getElementById('notify-sucess');
    const faieldMessage = document.getElementById('notify-fail');
    if (Pin == number) {
        faieldMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
        faieldMessage.style.display = 'block';
    }
}