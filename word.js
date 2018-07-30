var letter = require("./letter");

function word(text) {
    this.text = text;
    this.guesses = 6;
    this.letters = [];
    this.guessed = []; // variable also used in letter.js could be issue later
    this.display = "";

    this.parseWord = function() {
        for (var i = 0; i < this.text.length; i++) {
            var displayLetter = new letter(this.text[i]);
            displayLetter.updateDisplay();
            this.letters.push(displayLetter);
        }
    }

    
}

module.exports = word;