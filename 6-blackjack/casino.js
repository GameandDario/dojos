/* Black Jack scoring
Ecrire une fonction qui recevra deux parametres et qui retournera le score de chaque joueur :
1er param => un array comprenant le jeux du joueur
2nd param => un array comprenant le jeux du croupier 

Example : 

const playerGame = ['3', '8', 'R'];
const dealerGame = ['A', 'R', '5'];

getScores(playerGame, dealerGame);

The player score is : 21
The dealer score is : 26
*/

const cardScore = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'V': 10,
  'D': 10,
  'R': 10,
  'A': 1 || 11,
}

const getScore = (game) => {
  let score = 0;
  for (let i=0; i<game.length;i++){
    if(game[i] !== 'A'){
      score += cardScore[game[i]];
    }else {
      if (score + 11 > 21){
         score += 1
      } else {
         score += 11
      }

    }
  }
  return score;
}

const playerGame = ['3', '8', 'R'];
const dealerGame = ['A', 'R', '5'];

const getScores = (playerGame, dealerGame) => {
  console.log('le score du joueur est :', getScore(playerGame))
  console.log('le score du dealer est :', getScore(dealerGame))
}

getScores(playerGame, dealerGame);