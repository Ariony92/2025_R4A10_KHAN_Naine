// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
   let tab = getEmployees();
   let tab2 = []
    for(let i in tab) {
      if(tab[i].name.endsWith("e")) {
        tab2.push(tab[i]);
      }
    }
    return tab2;
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    let tab = getEmployees();
    return tab.find(x => x.age < 30)
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    let tab = getEmployees();
    for (let index in tab) {
      if (tab[index].name === "Jeremy") {
        return Number(index);
      }

      // egalement possible avec return tab.findIndex(emp => emp.name === "Jeremy");
    }
  },




  // 4) Trier le tableau par âge des personnes
  B4() {
    return getEmployees().sort((a,b) => a.age - b.age);
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    let tab = getEmployees();
    tab.push({name: "Kasimu", age: "38"});
    return tab; //marche pa
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    return getEmployees().length;
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    let tab = getEmployees();
    for (let i in tab) {
      if (tab[i].name === "Theo"){
        tab[i].name = tab[i].name.replace("o", "a");
      }
    }
    return tab;
  },

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    let tab = []
    for(let i in getEmployees()) {
      if (getEmployees()[i].name.includes("e")) {
        tab.push(getEmployees()[i]);
      }
    }
    return tab;
  },
};