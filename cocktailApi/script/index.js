
const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const containerCocktail = document.querySelector("#containerCocktail");
const inputCocktail = document.querySelector("#inputCocktail");
const btnCocktail = document.querySelector("#btnCocktail");
const cocktailsSelect= document.querySelector("#cocktailsSelect");
callApi(urlCocktail, stampaDati);

function callApi(url, callback) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            callback(data);
        })

}

function stampaDati(data) {
    console.log(data.drinks);
    data.drinks.forEach((e) => {
        containerCocktail.innerHTML += `
          <div class="col-lg-4 col-sm-6 my-3">
              <div class="card" style="width:auto">
              <img class="card-img-top" src="${e.strDrinkThumb}" alt="Card image">
              <div class="card-body">
                <h4 class="card-title">${e.strDrink}</h4>
                <p class="card-text">
                   <br>Categoria</b>
                   <br>${e.strCategory}
                </p>
                <button data-bs-toggle="collapse" data-bs-target="#D${e.idDrink}" class="btn btn-primary">Preparazione</button>
                <div id="D${e.idDrink}" class="collapse">
                      ${e.strInstructionsIT || "istruzione non diponibili"}
                </div>
              </div>
              </div>  
          </div>
        `
    })
}


btnCocktail.onclick = ()=>{
    //sbiancare sezione cocktail
    containerCocktail.innerHTML="";
    //console.log(inputCocktail.value);
    //leggere l input dell utente
    const nuovaInput=inputCocktail.value ;
    //comporre la nuova url
    const urlNuova= urlCocktail + nuovaInput;
    //richiamare la nuova api
    callApi(urlNuova, stampaDati);
    //ripulire l input
    inputCocktail.value="";

}

cocktailsSelect.addEventListener("change",(e)=>{
   //console.log(e.target.value);
   containerCocktail.innerHTML="";
   const selectCocktail = e.target.value;
   const urlSelect=urlCocktail+selectCocktail;
   callApi(urlSelect,stampaDati);
   e.target.value="";
})