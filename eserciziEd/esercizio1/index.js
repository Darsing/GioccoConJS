const date = new Date();
const options = [
    {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    },
    {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    },
    {
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    }
];

//console.log(date.toLocaleDateString(undefined, options[0]))

//2 metodi per risolvere 'map' e 'forEach

/*
options.map((option)=>{
    const p= document.createElement('p');
    
    p.textContent=`${date.toLocaleDateString(undefined, option)}`;
    document.body.appendChild(p);
})
*/

options.forEach(option => {
    const dataFormattata = date.toLocaleString(undefined, option);
    const element = document.createElement('h2');
    const test = document.createTextNode(dataFormattata);
    element.appendChild(test);
    document.querySelector('body').appendChild(element)
});
