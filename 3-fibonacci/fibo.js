// Ecrire une fonction qui prendra un nombre en argument
// La fonction devra retourner une chaine de charactere représentant 
// la suite de Fibonnaci avec autant d'occurence que le nombre passé en paramètre
const fibonacci = (maxValue) => {
  let last = 0;
  let current = 1;
  let result = '0-1';
  for (let i = 0; i < maxValue; i++) {
    let mem = current;
    result += `-${(last + current)}`;
    current = current + last;
    last = mem;
  }
  return result;
};


console.log(fibonacci(10));