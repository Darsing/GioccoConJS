const para = document.querySelector('p');

const updateName = ()=>{
     let name = prompt("Enter a new name");
     para.textContent = 'Player 1 : ' + name;
}

para.addEventListener('click',updateName);
