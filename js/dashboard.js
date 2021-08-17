depositBtn.addEventListener('click', function(){
    getInput('deposit','depositInput',true)
})
withdrawBtn.addEventListener('click', function(){
    getInput('withdraw','withdrawInput',false);
})
logout.addEventListener('click', function(){
    window.location.href = 'index.html';
})

function getInput(inputDisplay, inputValue, isTrue){
    const display = document.getElementById(inputDisplay);
    const input = document.getElementById(inputValue);
    const balance = document.getElementById('balance');
    const convertedDisplay = parseFloat(display.innerText);
    const convertedInput = parseFloat(input.value);
    const convertedBalance = parseFloat(balance.innerText);

    if(input.value == ''){
        alert('Input amount');
    }else if(input.value < 0){
        alert('Only positive number');
    }else{
        const newDisplay = convertedDisplay + convertedInput
        let preBal = convertedBalance;
        let newBalance;

        if(isTrue == true){
            newBalance = convertedBalance + convertedInput;
            display.innerText = newDisplay;
            balance.innerText  = newBalance;
        }else{
            if(preBal < convertedInput){
                alert('Not enough balance');
            }else{
            newBalance = convertedBalance - convertedInput;
            display.innerText = newDisplay;
            balance.innerText  = newBalance;
            }
        }
        input.value = '';
    }
}