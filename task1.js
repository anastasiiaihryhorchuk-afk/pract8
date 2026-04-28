const readline = require("readline");

//це списано, каюсь. проблема в тому, шо це не запускається//

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let playAgain = true;

function startGame() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    console.log("Я загадав число від 1 до 100. Спробуй вгадати!");

    function ask() {
        rl.question("Введи число: ", (answer) => {
            let guess = Number(answer);
            attempts++;

            if (isNaN(guess)) {
                console.log("Введи нормальне число!");
                ask();
            } else if (guess > secretNumber) {
                console.log("Занадто велике!");
                ask();
            } else if (guess < secretNumber) {
                console.log("Занадто маленьке!");
                ask();
            } else {
                console.log(`Ти вгадав! Кількість спроб: ${attempts}`);
                rl.question("Хочеш зіграти ще раз? (y/n): ", (ans) => {
                    if (ans.toLowerCase() === "y") {
                        startGame();
                    } else {
                        rl.close();
                    }
                });
            }
        });
    }

    ask();
}

startGame();