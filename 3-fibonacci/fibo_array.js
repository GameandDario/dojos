// Ecrire une fonction qui prendra un nombre en argument
// La fonction devra retourner une chaine de charactere représentant 
// la suite de Fibonnaci avec autant d'occurence que le nombre passé en paramètre
const fibonacciArray = (maxValue) => {
  let values = [0, 1];
  for (let i = 1; i < maxValue; i++) {
    const newValue = values[i] + values[i - 1];
    values.push(newValue);
  }
  return values.join('-');
};


console.log(fibonacciArray(100));