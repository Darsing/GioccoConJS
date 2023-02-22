let arr = [];
const numeriElementi=10;
const max = 100;
let somma =0;
const div = document.querySelector('div');

for(let i=0;i<numeriElementi;i++){
    arr.push(Math.floor(Math.random()*max))
}
//console.log(arr);

arr.map(numero =>{
    somma+=numero;
    div.innerText=`la somma : ${somma}
                   i numeri : ${arr}`;
})