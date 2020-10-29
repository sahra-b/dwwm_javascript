//ce programme accepte un nbr de colonne qui est un diviseur du nbr de ligne
//indiquer le nbr de colonne souhaitée -1
var nbrescol=2
//indiquer le nbr de valeur souhaitée -1
var nbreslig=10
//on definit la chaine HTML
var chaine
//on definit un Array qui va contenir les données à afficher dans la page web
var tab=new Array()
//99 représente le nbr de valeur à afficher
for (i=0;i<=nbreslig-1;i++){
    tab[i]=i+1
}
//permet la visibilité dans la page web
console.log(tab)
//action initiale
chaine=`<table border=1>`
i=0
//98 va représenter le nbr de valeur à récupérer
//98=99-1
while (i<nbreslig-1){ 
    //action initiale
  chaine+=`<tr>`   
  k=0
  //10 est e nbr de colonne à afficher
  while (k<nbrescol){
    //action itérative
  chaine+=`<td>${tab[k+i]}</td>`
  k=k+1
  }

  chaine+=`</tr>`
  //10 représente le nbr de valeur affiché par ligne
  i=i+nbrescol
}
chaine+=`</table>`
var div=document.getElementById("resultat")
div.innerHTML=chaine