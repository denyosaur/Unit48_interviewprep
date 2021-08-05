function guessingGame() {
    var answer = Math.floor(Math.random() * 100);;
    var guesses = 0;
    var finished = false;
    return function (num = 0) {
        guesses += 1;
        if (finished) return "The game is over, you already won!";

        if (num === answer) {
            finished = true
            return `You win! You found ${answer} in ${guesses} guesses.`;
        } else if (num < answer) {
            return `${num} is too low!`
        } else if (num > answer) {
            return `${num} is too high!`;
        };
    };

};

module.exports = { guessingGame };
