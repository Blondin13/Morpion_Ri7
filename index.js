//---------------------------------------------MES VARIABLES----------------------------------------------------//
let imgCross = '<img src="../assets/img/croix.png">';// Variable imgCross  = l'img qui fait la croix;
let imgCircle = '<img src="../assets/img/rond.png">';// Variable imgCircle = l'img qui fait le rond;
let imgTrait ='<img src="../assets/img/trait.png" class="scoreTrait">';// Variable imgTrait  = l'img qui fait le trait des scores;
let array = document.querySelectorAll("table td");// Variable array(Tableau) = document.querySelectorAll("table td") permet de selection mon <table> et <td> du html;
const victoryConditions = [// Constante condition de victoire = [[avec toutes les combinnaisons gagnante]];
  // Horizontale
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Verticale
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonale
  [0, 4, 8],
  [2, 4, 6]
];
let win = false;// Variable win = false (faux);
let lap = 1;    // Variable lap (tour jouer) = 1;
let gameModeCpu = false;// Variable gameModeCpu (Contre l'ordi) = false (faux);


//---------------------------------------------FONCTION play(X ou O)---------------------------------------------//
function play(element){                // FONCTION play(element) pose les elements X et les O qui sont mes images
  if(!win && element.innerHTML === ''){// SI(!win et element.innerHTML et strictement égal "" vide)le joueur pourra posé ça X ou O dans un block uniquement vide=> "bloque également le fait de cochet une case pleine ET quant une partie gagné ou nul"
      if(lap % 2 !== 0 ){              // SI(lap 1 % 2 !== pas egal a 0) "On utilise le modulo 2" pour verrifié si un nmb paire ou impaire
        element.innerHTML = imgCross;  // Le joueur-1 peut posé ça croix en selectionnant la variable imgCross qui est = à l'element a integré dans le html
          testGain();// On appel la fonction "testGain" voir si le joueur-1 a gagné
        if(win){     // SI(win) qui est = false
          return     // RETOURNE pour arreté la fonction
        }
      }else{         // SINON
        element.innerHTML = imgCircle; // Le joueur-2 peut posé sont rond en selectionnant la variable imgCircle qui est l'element a integré dans le html
      }     
        lap++; // Si pas de gagnant OU pas de match nul rajoute +1 a lap DONC lap = 3 et la fonction play se rejout

      if(!win && gameModeCpu && lap % 2 == 0 ){ // Si(win == false personne a gagné ET que je joue contre le CPU ET Lap 2 tours du seconde joueur ami ou CPU)
        ia();// On appel la FONCTION ia() que si on joue contre le CPU
      }
        testGain();// On appel la fonction "testGain" voir si le joueur-2 a gagné                                      
    }              // et la fontion "chekTie" qui est appelé à la fin de la fontion "testGain" pour voir si un match est nul                                                                                      
}                                                                


//---------------------------------------------FONCTION GAIN---------------------------------------------------//
function testGain(){// FONCTION testGain() vérifie si il y as un gagnant OU "chekTie" pour un match nul
for(let i = 0; i < victoryConditions.length; i++){
  let firstCase = array[victoryConditions[i][0]];
  let secondCase = array[victoryConditions[i][1]];
  let thirdCase = array[victoryConditions[i][2]];

  if(firstCase.innerHTML == "" || secondCase.innerHTML == "" || thirdCase.innerHTML == ""){
    continue;
  }

  if(firstCase.innerHTML == secondCase.innerHTML && secondCase.innerHTML == thirdCase.innerHTML){

    //------------Animation-------------//
      firstCase.classList.add("anim");  
      secondCase.classList.add("anim"); //Animation pour faire clignoté les cases gagnantent
      thirdCase.classList.add("anim");  
    //----------------------------------//

    if(firstCase.innerHTML == imgCircle){

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";// Affiche le message "Le joueur 2 gagne" dans le H2 de l' HTML qui pour id #gagnant
      document.querySelector("#gagnant").classList.add("anim");// Fait que le message "Le joueur 2 gagne" clignote
      document.getElementById("score2").innerHTML += imgTrait;// Ajoute une img d'un trait qui correspond aux scores
      
      win = true; // win = vrai permet de bloqué que la partie et gagné
      
    }else if(firstCase.innerHTML == imgCross){

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.querySelector("#gagnant").classList.add("anim");
      document.getElementById("score1").innerHTML += imgTrait;

      win = true; // win = vrai permet de bloqué que la partie et gagné 
    }
  }
}
  if(!win){ // si win false(!win) faire checkTie
  checkTie();
  }    
}


//---------------------------------------------FONCTION MATCH NULL-----------------------------------------------//
function checkTie(){                       // FONCTION chekTie() vérifie si il y as match nul
  let count = 0;                           // count pour compte 1 , 2, 3, etc...
    for(let i = 0; i < array.length; i++){ // Si variable i et inferieur a array(tableau) qui a 9 cases, faire +1
      if(array[i].innerHTML != ""){
        count++;                           // count = 0 fait +1
      }
    }
      if(count === 9){                                                   // count compte +1 jusqu'a 9
        document.querySelector("#gagnant").innerHTML = "Partie nul !!!!";// affiche partie nul
        document.querySelector("#gagnant").classList.add("anim");        // fait que partie nul clignote
        win = true;// win = vrai permet de bloqué que la partie et gagné
  }
}


//---------------------------------------------FONCTION NOUVELLE PARTIE------------------------------------------//
function newsGame(){       // FONCTION newsGame() fait rejouer une partie sans refraiche la page complete
    array.forEach(function(value){   // parcourt mon tableau ET ces valeurs"
      value.innerHTML = "";// ET met les valeurs qui sont les img "X" et les "O" en vide " "(en gros les suprimes)
      value.classList.remove("anim");// suprime l'animation de glignotement des cases et valeurs
    });
    document.querySelector("#gagnant").innerHTML = "QUI SERA LE GAGNANT ???";// met le texte "QUI EST LE GAGNANT ???" en supriment le joueur gagnant qui clignote
    document.querySelector("#gagnant").classList.remove("anim");// suprime l'animation de glignotement
    win = false;// Enleve le gagnant quant win = true dans mon testGain et checkTie en le mettant en false
    lap = 1;    // C'est repartie pour lap = 1 du fonction play
}


//---------------------------------------------FONCTION RANDOM-(I.A)---------------------------------------------//
function ia(){
  for(let i = 0; i < array.length; i++){
let rand = getRandom(0, array.length -1)
    if(array[rand].innerHTML === ''){
      setTimeout(function(){
      array[rand].innerHTML = imgCircle;
        testGain();
      },300);
      lap++;
      break
    }
  }
}
// La fonction random
function getRandom(min, max){    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//---------------------------------------------FONCTION 2JOUEUR--------------------------------------------------//
function playFriend(){
    gameModeCpu = false;
}

function playCpu(){
    gameModeCpu = true;
}
