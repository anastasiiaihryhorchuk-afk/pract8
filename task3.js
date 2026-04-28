function sumDigits(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;     
        number = Math.floor(number / 10); 
    }

    return sum;
}

let number = 5674;
console.log("Сума цифр:", sumDigits(number));