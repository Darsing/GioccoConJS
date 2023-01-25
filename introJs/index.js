// const baliseHtml= document.querySelector('h4');
// baliseHtml.style.background='red';
// baliseHtml.style.padding='5px';

//Event click
const questionContainer = document.querySelector('.click-event');
const btn1= document.querySelector('#btn-1');
const btn2= document.getElementById('btn-2');
const reponse = document.querySelector('p');



questionContainer.addEventListener('click',()=>{
    //questionContainer.classList:add('question-cliked');
    //questionContainer.classList:remove('question-cliked');
    //per agguingere e rimuovere una classe css ,con toggle li gestisce entrambe
    questionContainer.classList.toggle('question-clicked');
});

btn1.addEventListener('click', ()=>{
   reponse.classList.add('show-reponse');
   reponse.style.background="green";
});
btn2.addEventListener('click', ()=>{
    reponse.classList.add('show-reponse');
    reponse.style.background="red";
});

//Mouse Events

const mousemove = document.querySelector(".muosemove");

window.addEventListener("mousemove", (e)=>{
    mousemove.style.left=e.pageX + "px";
    mousemove.style.top=e.pageY + "px";
})

window.addEventListener("mousedown", ()=>{
   mousemove.style.transform ="scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", ()=>{
    mousemove.style.transform ="scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
 });

questionContainer.addEventListener("mouseenter", ()=>{
    questionContainer.style.background="rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", ()=>{
    questionContainer.style.background="yellow";
});

reponse.addEventListener("mouseover",()=>{
  reponse.style.transform ="rotate(2deg)";
});