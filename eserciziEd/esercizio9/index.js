const input = document.getElementById('ricerca');
const risultati = document.getElementById('risultati');

input.addEventListener('keyup',autocomplete);

const nomi = [
    "andrea",
    "anna",
    "marco",
    "luca",
    "giovanni",
    "giovanna",
    "chiara",
    "clara",
  ];

  function autocompleteMatch(valore){
    if(valore == "") return []
    const reg = new RegExp(valore)
    return nomi.filter(nome => {
        if(nome.match(reg)) return nome
    })
  }

function autocomplete(event){
    //console.log(valore.key); questo prende solo il carattere
    //console.log(valore.target.value);//questa prende tutto il valore
    let nomiConsigliati = ``;
    const nomi=autocompleteMatch(event.target.value);
    nomi.forEach(nome =>{
        nomiConsigliati+=`<li class="list-group-item list-group-item-action list-group-item-light" onclick="seleziona(event);">${nome}</li>`
    })
    risultati.innerHTML+= `<ul class="list-group">${nomiConsigliati}</ul>`
}

function seleziona(event){
     //console.log(event.target.textContent);
     risultati.innerHTML="";
     input.value= event.target.textContent
}