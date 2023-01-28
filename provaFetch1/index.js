//comment recupere des donnees avec la fetch
//comment gerer si api ne fonction pas ou si ont fait une mauvaise requette


const r = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                console.log(data);
                data.forEach(a => {
                    document.body.innerHTML+= `<div class="container">
                    <h2> compte de ${a.name} </h2>
                    <h3> email ${a.email} </h3>
                    <h4> site ${a.website} </h4>
                    </div>`;  
                });
                
            })
        }
        else {
            console.log("ERREUR");
            document.body.innerHTML += `<h4> Erreur :(</h4>`
        }

    })


// const img = document.getElementById("img");
// fetch('https://api.thecatapi.com/v1/images/search')
//      .then(res=> res.json())
//      .then(data => img.src= data[0].url)

const img = document.getElementById("img");
const btn = document.querySelector(".box");

const changeImg = () => {
    btn.addEventListener("click", () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        img.src = data[0].url
                    })
                }
                else {
                    console.log("Erreur");
                }
            })
    })

}

changeImg();





