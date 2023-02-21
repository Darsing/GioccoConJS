// const oggi = new Date();
// const options = [
//     {
//         year: 'numeric',
//         month: '2-digit',
//         weekday: 'long',
//         day: 'numeric',
//     },
//     {
//        hour: '2-digit',
//        minute: '2-digit',
//        second: '2-digit',
//        hourse12: true, 
//     },
//     {
//         year: 'numeric',
//         month: 'long',
//         weekday: 'short',
//         day: 'numeric',
//     },
// ]
// //console.log(oggi.toLocaleString(undefined, options[1]));

// options.forEach(option => {
//     const dataFormattata =oggi.toLocaleString(undefined,option );
//     const element = document.createElement('h2');
//     const test = document.createTextNode(dataFormattata);
//     element.appendChild(test);
//     document.querySelector('body').appendChild(element)
// }); 
/*
//let citta= 'Milano ,Torino ,Roma ,Venezia,Napoli';
let data =['Milano','Torino','Roma','Venezia', 'Napoli'];

let citta1= data.join(',');
console.log(citta1);
data.push('Firenze')
data.pop();
console.log(data);
*/

// let nome ="van";
// let numeri=12;

// if(nome=="vane"){
//     console.log("ciao " +nome);
// }
// else{
//     console.log("personne anonima ");
// }

// if(numeri < 20){
//     if(numeri % 2 == 0){
//         console.log("numeri pari");
//     }
//     else{
//         console.log("numeri dispari");
//     }
// }


// let arr = [];
// const numeriElementi = 10;
// const max = 100;
// let somma = 0;
// for (i = 0; i < numeriElementi; i++) {
//     arr.push(Math.floor(Math.random() * max));
//     somma += arr[i]; 
// }

// console.log(arr + "\n la somma: " + somma);

// const btn =document.querySelector('#btn');
// const data1 = document.getElementById('data1');
// const data2 = document.getElementById('data2');

// const calcola = ()=>{
//    const date1Milli= new Date(data1.value).getTime();
//    const date2Milli= new Date(data2.value).getTime();
   
//    if(date2Milli > date1Milli){
//     const diff = date2Milli - date1Milli;
//     console.log(diff/(1000*60*60*24));
//    }
// }

// btn.addEventListener('click', calcola);

//operatote ternaire
// let numero =40;
// let n = (numero < 30) ? "numero minore" :"numero maggiore";
// console.log(n);

//loop
/*
let array =[11,23, 13,34,56,89,100];

for(let i=0;i<array.length;i++){
   if(array[i] % 2 ==0){
      console.log("numero pari " + array[i]);
      break;
      //continue;
   }
   console.log(i+1 + ")" + array[i]);
}

let array2= [23,45,78,34,100];
let i=0;
while (i<array2.length) {
   console.log(array2[i]);
   i++;
}
*/

//le funzione
/*
let btn = document.querySelector('#button');
let title = document.querySelector('h1');
let input = document.getElementById('test1');

function saluta(name){
    title.innerHTML= `ciao ${name}`;
}

btn.addEventListener('click', ()=>{
   //console.log(input.value);
   saluta(input.value);
})
*/

//funzione con il return
/*
let btn = document.querySelector('#button1');
let title = document.querySelector('#h1');
let numero = document.getElementById('demo1');

function cubo(number) {
   let result = number*number*number*number;
   return result; 
}

btn.addEventListener('click', ()=>{
   title.innerHTML= cubo(numero.value);
})

*/

//gli eventi
/*
const form = document.querySelector('form');
const nome = document.querySelector('#fname');
const cognome = document.querySelector('#lname');
const btn = document.querySelector('#change');
const para =document.querySelector('p');

form.addEventListener('submit',(e)=>{
   if(nome.value==='' || cognome.value===""){
      para.innerHTML=`devi inserire i dati`;  
   }
   else{
      e.preventDefault();
      para.innerHTML=`${nome.value} ${cognome.value}`
   }
   
})
*/

//oggetto
//dot notation(in modo non dinamico) e la bracket notation(se devo mettere qualcosa in modo dinamico)
//persona.nome e persona['nome']
/*
const chiave ="indirizzo";
const persona={
   nome:'Luca',
   cognome:'Rossi',
   eta:32,
   genere:'Maschio',
   interessi:['snowboard','basket','picnic'],
   indirizzo:{
      via:'Roma',
      cap:'09345',
      provincia:'Mi',
      citta:'Milano'
   },
   saluta: function(){
      console.log(`ciao ${persona.nome}`);
      console.log(`ciao sono ${this.cognome}`);
   }
}
//chiamare il metodo saluta
persona.saluta();
//uso della bracket notation
console.log(persona[chiave]['via']);
//come aggiornare un oggetto
persona.nome='Paolo';
persona.colorePreferito="blu";
console.log(persona);
*/

//js object per il principiante(oop=programazione orientato agli oggetti)
//costruttore

/*
function Persona(nome,cognome,eta,genere,interessi) {
   this.nome=nome;
   this.cognome=cognome;
   this.eta=eta;
   this.genere=genere;
   this.interessi=interessi;
   this.bio=function() {
      console.log(`${this.nome} ${cognome} è 
      ${(this.genere=='Maschio')? 'un ragazzo':'una ragazza '}di ${this.eta} anni
      a cui piace ${this.interessi.join(',')}`);
   };
   this.saluta=function(){
      console.log(`ciao sono ${this.nome}`);
   }
}

const persona1=new Persona("Marco","Weist",33, "Maschio",["tenis","basket","calcio"]);
const persona2=new Persona("vane","pippo",23, "Femina",["danza","musica"]);
console.log(persona1);
console.log(persona2);

persona1.saluta();
persona2.saluta();
persona1.bio();
persona2.bio();
*/

//ereditarieta






