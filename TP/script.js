//somme des nombes de 1 a n
/*
somme<-0   (ligne 10) 
i<-1   (ligne 10)
tantque (i<=4)  (ligne 11)
 somme<-somme+i
 i<-i+1
fintantque   (ligne 14)

var somme=0,i=1;
while (i<=4) {
    somme=somme+i
    i=i+1
    console.log("i: "+i+" somme: "+somme)
}
console.log("resultat: "+somme)
*/

//produit
/*
produit=1
i=1
while (i<=4) {
    produit=produit*i
    i=i+1
}
console.log("le produit est: "+produit)
//produit2
produit=1
for (i=1;i<=4;i++) {
    produit=produit*i
}
console.log("le produit est: "+produit)
*/
//question3
/*
Somme <-0
I<_1
Tantque (i<=4)
 Somme<-somme+1/I
 I<-I+1
fintantque

var somme=0,i=1;
while (i<=4){
    somme=somme+1/i
    i=i+1
}
console.log("la somme est: "+somme)

var somme=0;
for (i=1;i<=4;i++) {
    somme=somme+1/i
}
console.log("la somme est: "+somme)

//question4
var somme=0,i=1;
while (i<=4){
    somme=somme+1+(i+1)(i*1)
}
console.log("la somme est: "+somme)

*/
/*
var total=0
var somme=0
var produit=1
var i=1
while (i<=3) { 
  total=total+somme/produit
  somme=somme+i
  produit=produit*i
  i=i+1
  console.log("somme: "+somme+"produit: "+produit)
}
console.log("le resultat est: "+total)
*/
//question5
/*
var compteur=0
var nombre=2
var listePremiers=new Array()
while (compteur<=100){ 
 var premier=true
 var i=2     
 while (i<nombre){ 
    if (nombre%i==0) premier=false
    i=i+1
}
 if (premier) {
    listePremiers[compteur]=nombre
    compteur++
}
 nombre++
}
console.log(listePremiers)
*/
//question6
/*
var phrase ="je vais au marche."
var i=0 //indice du caractère
var compteur=0 //compteur nbr caractère
while (phrase[i]!=".") { 
    console.log(phrase[i])
    if (phrase[i]!="." && phrase[i]!=" ") compteur++
    i++
}
console.log("nbr car: "+compteur)
*/
/*
var phrase ="je vais au marche."
var compteur=0
var i=0
while (phrase[i]!=".") { 
    while (phrase[i]==" " && phrase[i]!=".") i++
    if (phrase[i]==".") break
    while (phrase[i]!=" " && phrase[i]!=".") i++
    compteur++

}
console.log("nombre caractère: "+compteur)
*/
//question7
/*
var mot="bonjour"
var longueur=7
var palyndrome=true
var i=0
var k=longueur-1
while (i<k) { 
    if (mot[i]!=mot[k]) palyndrome=false
    i=i+1
    k=k-1
}
if (palyndrome) console.log("ok"); else console.log("pas ok")
*/
//question8_a
/*
var tab=[15,17,1,3,18,20,32,45,60]
function max(tableau){ 
 var i=0
 var max=tab[i]
 while (i<tableau.length) {
    if (max<tab[i]) max=tab[i]
    i++
 }
 console.log('le maximum est: ',max)
}
max(tab)
*/
//question__b
/*
var tab=[15,17,1,3,18,20,32,45,60]
var i=0
function number (tab) {
    return (tab>i)
}
console.log('resultat: ',tab)
*/
/*
var tab=[15,17,1,3,18,20,32,45,60]
function tritableau(tab){ 
var i=0;
//variable booleenne pour controler si interversion
var interv=true
while (interv) {
    //on se positionne en debut de tableau
    var i=0
    interv=false
    //parcours du tableau
    while (i<tab.length) {
        if (tab[i]>tab[i+1]){
            resultat=tab[i+1];
                interv=true
            tab[i+1]=tab[i];
            tab[i]=resultat;
        }
        i=i+1
    }
}
return tab
}
console.log(tritableau(tab))
*/
var tab=["Paul,18","Elodie,33","Luc,21","Mike,31"]
var i=0;
while (i<tab.length) {
    if (tab[i]>tab[i+1]){
        resultat=tab[i+1];
        tab[i+1]=tab[i];
        tab[i]=resultat;
    }
    i=i+1
}
console.log(tab)

