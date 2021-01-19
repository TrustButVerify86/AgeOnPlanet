//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
user enters age

convert seconds to earth years
calculate earth years for all other planets
Announce space age properties



*/

function getAge(){
var form= document.getElementById('ageForm');
var age= form.elements.agePlease.value;


var mercury= Math.round(age * .2408467);
var venus= Math.round(age * .61519726);
var earth= age;
var mars= Math.round(age * 1.8808158);
var jupiter= Math.round(age * 11.862615);
var saturn= Math.round(age * 29.447498);
var uranus= Math.round(age * 84.016846);
var neptune= Math.round(age * 164.79132);



//Change city Mercury to current call
var mercuryElement=document.querySelector("#mercury");
mercuryElement.innerHTML=`Mercury age in Earth Years: ${mercury}`

//Change city Venus to current call
var venusElement=document.querySelector("#venus");
venusElement.innerHTML=`Venus age in Earth Years: ${venus}`

//Change city Earth to current call
var earthElement=document.querySelector("#earth");
earthElement.innerHTML=`Earth age in Earth Years: ${earth}`

//Change city Mars to current call
var marsElement=document.querySelector("#mars");
marsElement.innerHTML=`Mars age in Earth Years: ${mars}`


//Change city Jupiter to current call
var jupiterElement=document.querySelector("#jupiter");
jupiterElement.innerHTML=`Jupiter age in Earth Years: ${jupiter}`

//Change city Saturn to current call
var saturnElement=document.querySelector("#saturn");
saturnElement.innerHTML=`Saturn age in Earth Years: ${saturn}`

//Change city Uranus to current call
var uranusElement=document.querySelector("#uranus");
uranusElement.innerHTML=`Uranus age in Earth Years: ${uranus}`

//Change city Neptune to current call
var neptuneElement=document.querySelector("#neptune");
neptuneElement.innerHTML=`Neptune age in Earth Years: ${neptune}`
}

let clkMe = document.querySelector("#submitAge");
clkMe.addEventListener("click", getAge);




