    
    var nombreAlea = Math.floor(Math.random() * 100) //nombre aléatoire
    var input = document.getElementById("inp") //récupère les éléments des input
    var button = document.getElementById("button") // " le bouton
    var resultat = document.getElementById("result") // " Le résultat
    var count = 0
    
console.log(nombreAlea) //voir le nombre a trouver dans la console

button.addEventListener('click', function(event) {//evenement Click sur le bouton qui lis la valeur de l'input 

    var value = input.value // valeur dans l'input
    count++

console.log (value) // afficher la valeur de la proposition dans la console

    if (value < nombreAlea) // Si la valeur de l'input est inférieur au nombre aléatoire
    return resultat.innerHTML = "C'est plus", input.focus()  // C'est PLUS ! 
    

    if (value > nombreAlea) // Si la valeur de l'input est supérieur au nombre aléatoire
    return resultat.innerHTML = "C'est moins", input.focus() // C'est MOINS !

    else
    result.innerHTML = "Bravo vous avez gagné en "  + count + " coups !" // C'est gagné quand le résultat est juste !

})