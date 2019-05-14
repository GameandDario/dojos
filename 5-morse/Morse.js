/* Ecrire une classe es6 qui recevra une chaine de caractere et qui grace à la méthode covert la convertira
en code morse */

const alphabet = require('./alphabet');

class Morse {
  constructor(originalString) {
    this.originalString = originalString.toUpperCase();
    this.morseString = '';
  }

  covert() {
    const splitedString = this.originalString.split('');

    splitedString.forEach(char => {
      this.morseString += alphabet[char];
    });

    return this.morseString;
  }
}

const test = new Morse('Hello Wolrd');

console.log(test.covert());