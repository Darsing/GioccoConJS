let arr = [
    {
        url: "per.jpg",
        titolo: "Una card bellissima",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, distinctio?"
    },
    {
        url: "for.jpg",
        titolo: "Una card 2",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, distinctio?"
    },
    {
        url: "pour.jpg",
        titolo: "Una card disney",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, distinctio?"
    }
]
//console.log(arr);

arr.forEach(data => {
    getData(data)
});

function getData(data) {
    const card = document.createElement('div');
    card.className = "col-lg-4";

    const innerDiv = document.createElement('div');
    innerDiv.className = "card width:400px";
    card.appendChild(innerDiv);

    const image = document.createElement('img');
    image.src = data.url;
    image.className = "card-img-top";
    innerDiv.appendChild(image);

    const bodyDiv = document.createElement('div');
    bodyDiv.classList = "card-body";
    innerDiv.appendChild(bodyDiv);

    const titolo = document.createElement('h4');
    titolo.className = "card-title";
    titolo.appendChild(document.createTextNode(data.titolo));
    bodyDiv.appendChild(titolo);

    const para = document.createElement('p');
    para.className="card-text";
    para.appendChild(document.createTextNode(data.descrizione));
    bodyDiv.appendChild(para);

    const row = document.querySelector('.row');
    row.appendChild(card);
};