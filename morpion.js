//-------------------------------------------------------------------------MES VARIABLES--------------------------------------------------------------------------------//

let lap = 1; // Variable tour jouer(lap) = 1
let imgCircle = '<img src="img/rond.png">'; // Variable imgCircle = img qui fait le rond
let imgCross = '<img src="img/croix.png">'; // Variable imgCross  = img qui fait le croix
let array = document.querySelectorAll("table td"); // Variable Tableau(array) = document.querySelectorAll("table td") permet de selection mon table et td du html 
let win = false; // Variable win = faux (false)
let imgTrait = '<img src="img/trait.png">';
let gameModeCpu = false; 


//-------------------------------------------------------------------------FONCTION X & O-------------------------------------------------------------------------------//


function play(element) {                  // FONCTION play(element) pose les elements X et les O qui sont mes images
    if(!win && element.innerHTML === ''){ // SI( !win et element.innerHTML et strictement égal "" vide ) "innerHTML" Voir traduction internet le joueur pourra posé ça X ou O dans un block uniquement vide "bloque également le fait de cochet une case pleine ET une partie gagné ou nul"
        if (lap % 2 !== 0 ) {             // SI lap 1 % 2 = pas egal a 0                                      ----------REJOUT lap 3 % 2 = pas egal a 0 
          element.innerHTML = imgCross;   // le joueur 1 peut posé ça croix FAIT "testGain" ET lap + 1 mtn lap = 2 suite "SINON"                        //etc...
            testGain();
        if (win){
            return
        }
        } else { //lap % 2 === 0          // SINON lap 2 % 2 = 0                                              ----------REJOUT lap 4 % 2 = 0
          element.innerHTML = imgCircle;  // le joueur 2 peut posé sont rond FAIT "testGain" ET lap + 1 mtn lap =3 suite "REJOUT"
        }     
            lap++;                        // si pas de gagnant OU match nul rajoute +1 a mon lap DONC lap = 3 et la fonction play se rejout
        if (!win && gameModeCpu && lap % 2 == 0 ){
            ia();
        }
            testGain();                   // EXECUTE la fonction du dessus "testGain" et vérifie si il y as un gagnant OU "chekTie" pour un match nul                                      
    }                                                                                                    
}                                                                        // ETC...........


//-------------------------------------------------------------------------FONCTION GAIN--------------------------------------------------------------------------------//


function testGain() {                 // FONCTION testGain() vérifie si il y as un gagnant OU "chekTie" pour un match nul
  //---------------------------------- horizontale 0 à 2 -----------------------------------//

  
  if (array[0].innerHTML == array[1].innerHTML && array[1].innerHTML == array[2].innerHTML) {
    if (array[0].innerHTML == imgCircle) {
      array[0].classList.add("anim"); //|
      array[1].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[2].classList.add("anim"); //|

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";
      document.getElementById("score2").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim"); // fait que le message joueur 2 gagne clignote

      win = true;                    // win = vrai permet de bloqué que la partie et gagné



    } else if (array[0].innerHTML == imgCross) {
      array[0].classList.add("anim"); //|
      array[1].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[2].classList.add("anim"); //|

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.getElementById("score1").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné
    }
  }
  

  //-------------------------------- horizontale 3 à 5 ----------------------------------//
  if (array[3].innerHTML == array[4].innerHTML && array[4].innerHTML == array[5].innerHTML) {

    if (array[3].innerHTML == imgCircle) {
      array[3].classList.add("anim");
      array[4].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[5].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";
      document.getElementById("score2").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné



    } else if (array[3].innerHTML == imgCross) {
      array[3].classList.add("anim");
      array[4].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[5].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.getElementById("score1").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné
    }
  }


  //-------------------------------- horizontale 6 à 8 ----------------------------------//
  if (array[6].innerHTML == array[7].innerHTML && array[7].innerHTML == array[8].innerHTML) {

    if (array[6].innerHTML == imgCircle) {
      array[6].classList.add("anim");
      array[7].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[8].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";
      document.getElementById("score2").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné


    } else if (array[6].innerHTML == imgCross) {
      array[6].classList.add("anim");
      array[7].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[8].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.getElementById("score1").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné
    }  
  }


  //--------------------------------- verticale 0 à 6 -----------------------------------//
  if (array[0].innerHTML == array[3].innerHTML && array[3].innerHTML == array[6].innerHTML) {

    if (array[0].innerHTML == imgCircle) {
      array[0].classList.add("anim");
      array[3].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[6].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";
      document.getElementById("score2").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné



    } else if (array[0].innerHTML == imgCross) {
      array[0].classList.add("anim");
      array[3].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[6].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.getElementById("score1").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné
    } 
  }


  //--------------------------------- verticale 1 à 7 -----------------------------------//
  if (array[1].innerHTML == array[4].innerHTML && array[4].innerHTML == array[7].innerHTML) {

    if (array[1].innerHTML == imgCircle) {
      array[1].classList.add("anim");
      array[4].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[7].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";
      document.getElementById("score2").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné



    } else if (array[1].innerHTML == imgCross) {
      array[1].classList.add("anim");
      array[4].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[7].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.getElementById("score1").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné
    } 
  }
  

  //--------------------------------- verticale 2 à 8 -----------------------------------//
  if (array[2].innerHTML == array[5].innerHTML && array[5].innerHTML == array[8].innerHTML) {

    if (array[2].innerHTML == imgCircle) {
      array[2].classList.add("anim");
      array[5].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[8].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";
      document.getElementById("score2").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné



    } else if (array[2].innerHTML == imgCross) {
      array[2].classList.add("anim");
      array[5].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[8].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.getElementById("score1").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné
    }  
  }

  
  //--------------------------------- diagonale 0 à 8 -----------------------------------//
  if (array[0].innerHTML == array[4].innerHTML && array[4].innerHTML == array[8].innerHTML) {

    if (array[0].innerHTML == imgCircle) {
      array[0].classList.add("anim");
      array[4].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[8].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";
      document.getElementById("score2").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné



    } else if (array[0].innerHTML == imgCross) {
      array[0].classList.add("anim");
      array[4].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[8].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.getElementById("score1").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné
    }  
  }


  //--------------------------------- diagonale 2 à 6 -----------------------------------//
  if (array[2].innerHTML == array[4].innerHTML && array[4].innerHTML == array[6].innerHTML) {

    if (array[2].innerHTML == imgCircle) {
      array[2].classList.add("anim");
      array[4].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[6].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 2 gagne";
      document.getElementById("score2").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");

      win = true;                     // win = vrai permet de bloqué que la partie et gagné



    } else if (array[2].innerHTML == imgCross) {
      array[2].classList.add("anim");
      array[4].classList.add("anim"); //| fait que les trois case selectionné part le vainceur clignote
      array[6].classList.add("anim");

      document.querySelector("#gagnant").innerHTML = "Le joueur 1 gagne";
      document.getElementById("score1").innerHTML += imgTrait;
      document.querySelector("#gagnant").classList.add("anim");
      win = true;                     // win = vrai permet de bloqué que la partie et gagné
    }
  }
    if (!win) { // si win false(!win) faire checkTie
    checkTie();
  }
}


//----------------------------------------------------------------------FONCTION MATCH NULL-----------------------------------------------------------------------------//

function checkTie() {                         // FONCTION chekTie() vérifie si il y as match nul
  let count = 0;                              // count pour compte 1 , 2, 3, etc...
    for (let i = 0; i < array.length; i++) {  // si variable i et inferieur a array(tableau) qui a 9 cases, faire +1
        if (array[i].innerHTML != "") {       //
        count++;                              // count = 0 fait +1
        }
    }
    if (count === 9) {                                                     // count compte +1 jusqu'a 9
        document.querySelector("#gagnant").innerHTML = "Partie nul !!!!"; // affiche partie nul
        document.querySelector("#gagnant").classList.add("anim");          // fait que partie nul clignote
        win = true;                                                        // win = vrai permet de bloqué que la partie et gagné
  }
}

//--------------------------------------------------------------------FONCTION NOUVELLE PARTIE--------------------------------------------------------------------------//


function newsGame(){                     // FONCTION newsGame() fait rejouer une partie sans refraiche la page complete
    array.forEach(function(value){       // parcourt mon tableau ET ces valeurs"
        value.innerHTML = "";            // ET met les valeurs qui sont les img "X" et les "O" en vide " " (en gros les suprimes)
        value.classList.remove("anim");  // suprime l'animation de glignotement des cases et valeurs
    })
    document.querySelector("#gagnant").innerHTML = "QUI SERA LE GAGNANT ???"; // met le texte "QUI EST LE GAGNANT ???" en supriment le joueur gagnant qui clignote
    document.querySelector("#gagnant").classList.remove("anim");              // suprime l'animation de glignotement
    win = false;                         // enleve le gagnant quant win = true dans mon testGain et checkTie en le mettant en false
    lap = 1;                             // c est repartie pour lap = 1 du fonction play

}
    
//-----------------------------------------------------------------------------FONCTION RANDOM------------------------------------------------------------------------------------//


function ia(){
    console.log("CHRISTOPHE")
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

// la fonction random
function getRandom(min, max) {    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//-----------------------------------------------------------------------------FONCTION 2JOUEUR------------------------------------------------------------------------------------//


function playFriend(){
    gameModeCpu = false;
    

}

function playCpu(){
    gameModeCpu = true;

}
