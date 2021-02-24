document.getElementById('convert').addEventListener('click', function(event) {
    let inputBits = document.getElementById('input').value;
    inputBits = inputBits.split('');
    const transOption = document.getElementById('transOption').value;
    
    if(transOption == 'Stuffing') {
        bitStuffing(inputBits);
    }
    else if(transOption == 'De Stuffing') {
        bitDeStuffing(inputBits);
    }
});

const bitStuffing = inputBits => {
    let bitsLength = inputBits.length;
    let count = 0;
    for (let i = 0; i < bitsLength; i++) {
        if(inputBits[i] === '1'){
            count += 1;
        }else{
            count = 0;
        }

        if(count == 5) {
            for (let j = bitsLength; j > i; j--) {
                inputBits[j] = inputBits[j-1];
            }
            inputBits[i+1] = '0';
            bitsLength += 1;
            count = 0;
        }
    }
    inputBits = inputBits.join('');
    document.getElementById('output').value = inputBits;
};

const bitDeStuffing = inputBits => {
    let bitsLength = inputBits.length;
    let count = 0;
    for (let i = 0; i < bitsLength; i++) {
        if(inputBits[i] === '1'){
            count += 1;
        }else{
            count = 0;
        }

        if(count == 5) {
            for (let j = i+1; j < bitsLength; j++) {
                inputBits[j] = inputBits[j+1];
            }
            bitsLength -= 1;
            count = 0;
        }
    }
    inputBits = inputBits.join('');
    document.getElementById('output').value = inputBits;
};