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

//keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
//une fonction qui me permet de jouer la musique a chaque fois qu'il y a keypress
//une methode pour ajouter de la musique en js
// const ring =()=>{
//     const audio = new Audio();
//     audio.src=('musica1.mp3');
//     audio.play();
// }

document.addEventListener("keypress", (e)=>{
      //console.log(e.key);
      key.textContent=e.key;
      e.key==="m" ?(key.style.background="red") : (key.style.background="none");  
      
      //ring();
});

//scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    //console.log(window.scrolly);
    if(window.scrollY > 120){
       nav.style.top=0; 
    }else{
        nav.style.top="-50px";
    }
})

//les evenemnts dans le form
const inputName=document.querySelector("input[type='text']");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo="";
let language="";


 inputName.addEventListener("input", (e)=>{
   //console.log(e.target.value);
   pseudo= e.target.value;
   //console.log(pseudo);
 });

 select.addEventListener("input", (e)=>{
    //console.log(e.target.value);
    language=e.target.value;
 });

 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(cgv.checked){
       document.querySelector("form> div").innerHTML=`
       <h3>Pseudo :${pseudo}</h3>
       <h4>langage prefere : ${language} </h4>`
    }else{
        alert("Veillez accepter les CGV");
    }
 });

//load event
//il se declanche qd toute la page a ete chargé
window.addEventListener("load",()=>{
    console.log("document charge !");
});

//le Foreach
const boxes= document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", (e)=>{
        //console.log(e.target);
        e.target.style.transform= "scale(0.7)";
    });
});

//adEventListener Vs onClick
//cette methode n est pas tres recomander
//il peut etre directement utuliser dans le html
// document.body.onclick = () =>{
//     console.log("click !");
// }

//bubbling=>fin(de base l eventListener est parametre en mode bublbing)
document.addEventListener("click",()=>{
    console.log("click 1");
});

//Usecapture
document.addEventListener("click",()=>{
    console.log("click 2");
}, true);

//-------------------------------------------

//stop propagation
questionContainer.addEventListener("click",(e)=>{
alert("yes");
e.stopPropagation();
});

//removeEventListener

//------------------------------------------
//BOM browser object model
//console.log(window.innerHeight);
//window.open();
//window.close()
//confirm();

//prompt
// btn1.addEventListener("click", ()=>{
//    let anwser= prompt("rentrez votre nom");
//    questionContainer.innerHTML += "<h3> Bravo" + anwser + "</h3>";
// })

// setTimeout(()=>{
//     questionContainer.style.borderRadius ="300px";
// },3000)

// setInterval(()=>{
  
// }, 1000)



