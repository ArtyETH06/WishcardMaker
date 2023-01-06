//On définit la const 'button
const button = document.getElementById('button_send')

button.addEventListener("click", function() {
  const value = document.getElementById('from_input').value

  alert("Bienvenue au pôle Nord " + value + "!\n🎅🛷🎁")
  
})





//-------------------------------------------------------------------Change le contenu de la carte-----------------------------------------------------------------
function change_contenu() {

    //Récupère la value de l'input
    var destinataire = document.getElementById("dest").value
    var from_input = document.getElementById("from_input").value
    var name = document.getElementById("name")
    var from = document.getElementById("from")

    //Pour afficher les variables dans la console
    console.log("La valeur du  destu est " + destinataire)
    //console.log("La valeur du prenom imput est " + prenom_input)
    //Remplace le texte du H1
    name.innerHTML = "Cher " + destinataire + ","
      //Récupère la value de l'input
    var p = document.getElementById("text_area").value
    var paragraphe = document.getElementById("paragraphe")

    //Pour afficher les variables dans la console
    console.log("La valeur du  paragraphe est " + p)
    //Remplace le texte du p
    paragraphe.innerHTML =  p
    from.innerHTML = from_input
  }


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------





//----------------------------------------------------------------------------------------Pour les Confettis--------------------------------------------------------
const btnConfetti = document.querySelector(".button");
btnConfetti.addEventListener("click", function () {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {y: 0.9, x:0.68}


  })
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log('heezqerndqehfbeuzhfdbrsqdhjfcv dsq')

//--------------------------Add/remove 'hidden'--------------------------------
let card = document.getElementById('card')

card.addEventListener("mouseover", function () {
  document.getElementById("form").classList.add('hidden')
})

card.addEventListener("mouseout", function () {
  document.getElementById("form").classList.remove('hidden')
  })



