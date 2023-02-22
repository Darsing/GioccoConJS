let arr = [];
const numeriElementi=10;
const max=100;

for(let i=0;i<numeriElementi;i++){
    arr.push(Math.floor(Math.random()*max));
};

arr.forEach(numero =>{
    const tipo = numero % 2 ==0 ?"pari" : "dispari";
    const div =document.querySelector('div');
    const p= document.createElement('p');
    p.textContent=`questo numero ${numero} è ${tipo}`;
    div.appendChild(p);
})