
const data =[
    {
        id:1,
        nome:"Paul",
        cognome:"Gialone",
        email:"paul@mail.it",
        codiceFiscale:"pgul0245ty",
        indirizzo:"via roma"
    },
    {
        id:2,
        nome:"Maria",
        cognome:"Faluna",
        email:"maria@mail.it",
        codiceFiscale:"maful0764ty",
        indirizzo:"via torino"
    }
];

const table =document.getElementById('table');

data.forEach((element)=>{
    const row = document.createElement('tr');

    Object.keys(element).forEach(key=>{
        //console.log(element[key]);
        const column = document.createElement('td');
        const testo= document.createTextNode(element[key]);
        column.appendChild(testo);
        row.appendChild(column);
    });
    table.appendChild(row);

})