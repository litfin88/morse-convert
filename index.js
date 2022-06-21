const sha256 = require("sha256")

let words = []
var lastWord = [];
let letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "-", "/", "'", "!", "(", ")", "&", ":", ";", "=", "+", "_", '"', "$", "@"]
let morseList = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", ".-.-.-", "--..--", "..--..", "-....-", "-..-.", ".----.", "-.-.--", "-.--.", "-.--.-", ".-...", "---...", "-.-.-.", "-...-", ".-.-.", "..--.-", ".-..-.", "...-..-", ".--.-."]

function valueToMorse(value, type, hashCondition) {
    words = value.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        let currentWordLetters = words[i].split("");

        for (let ii = 0; ii < currentWordLetters.length; ii++) {
            try {
                let wordIndex = letterList.indexOf(currentWordLetters[ii])
                if (wordIndex === -1) {
                    throw err = "\x1b[41m\x1b[1mERROR:\x1b[0m \x1b[1mThis project does not support \x1b[33m\x1b[1m'"+currentWordLetters[ii]+"'\x1b[0m \x1b[1mletter.\nPlease change this letter to an alternative and continue.";
                }

                currentWordLetters[ii] = morseList[wordIndex]
            } catch (err) {
                return err
            }
        }

        if (type == Array) {
            lastWord.push(currentWordLetters.join(" "));
        }

        if (type == String || type == null) {
            lastWord += currentWordLetters.join(" ") + "   ";
        }
    }

    if (hashCondition) {
        return sha256(lastWord);
    } else {
        return lastWord
    }

}

function morseToValue(value, type, hashCondition) {
    words = value.toLowerCase().split("   ");

    for (let i = 0; i < words.length; i++) {
        let currentWordLetters = words[i].split(" ");

        for (let ii = 0; ii < currentWordLetters.length; ii++) {
            try {
                let wordIndex = morseList.indexOf(currentWordLetters[ii])
                if (wordIndex === -1) {
                    throw err = "\x1b[41m\x1b[1mERROR:\x1b[0m \x1b[1mThis project does not support \x1b[33m\x1b[1m'"+currentWordLetters[ii]+"'\x1b[0m \x1b[1mletter.\nPlease change this letter to an alternative and continue.";
                }

                currentWordLetters[ii] = letterList[wordIndex]
            } catch (err) {
                return err
            }
        }

        if (type == Array) {
            lastWord.push(currentWordLetters.join(""));
        }

        if (type == String || type == null) {
            lastWord += currentWordLetters.join("") + " ";
        }
    }

    if (hashCondition) {
        return sha256(lastWord);
    } else {
        return lastWord
    }
}

module.exports.valueToMorse = valueToMorse
module.exports.morseToValue = morseToValue