function letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.display = "";

    // Displays underscore as a placeholder or the letter when correctly guessed
    this.updateDisplay = function() {
        if (this.letter === " ") {
            this.display = " ";
            this.guessed = true;
        } else if (this.guessed) {
            this.display = this.letter;
        } else {
            this.display = "_";
        }
    }
}

module.exports = letter;