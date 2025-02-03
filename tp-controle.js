module.exports = {
  // 1) Renvoyer un tableau contenant les résultats de la logique FizzBuzz remaniée
  /*
  En partant du nombre 1 et en allant jusqu'au nombre 35 inclus, parcourez chaque nombre entre ces deux extrémités.
  Pour chaque nombre :
    - Si le nombre est divisible par 3, ajouter "JavaScript" au tableau
    - Si le nombre est divisible par 5, ajouter "TypeScript" au tableau
    - Si le nombre est divisible par 3 et par 5, ajouter "Python" au tableau
    - Sinon, ajouter simplement le nombre au tableau
  Renvoyer le tableau final.
*/
  F1() {

    let tab =[];
    let message ="";
    for (let i = 1; i <= 35; i++) {
      if (i%3===0 && i%5===0){
          message = "Python";
      }else if(i%3===0){
          message = "JavaScript";
      }else if(i%5===0){
          message ="TypeScript";
      }else {
        message = i;
      }
      tab.push(message);
    }
    return tab;

  },
};