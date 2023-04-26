const tache = document.querySelector('#element');
const button = document.querySelector('#btn1');
const items = document.querySelector('#item');
const form = document.querySelector('form');
const noTache=document.querySelector('#noTache');
items.innerHTML=localStorage.getItem("list");

form.onsubmit= function(e){
 e.preventDefault();
 const li = document.createElement('li');
 li.className='list-group-item';
 li.innerHTML = tache.value;
 const spanDel = document.createElement('span');
 spanDel.classList.add("delete");
 spanDel.textContent="[X]";
 spanDel.onclick=()=>del(li);

 li.appendChild(spanDel);
 items.appendChild(li);

 tache.value="";
 noTache.style.display= "none";


 localStorage.setItem("list",items.innerHTML);
}

function del(element){
      element.remove();
}

console.log(document.querySelectorAll('#italic'));


