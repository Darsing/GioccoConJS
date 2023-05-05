const urlM = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=";
const containerMakeup = document.querySelector("#containerMakeup");

callApi(urlM, stampaDati);
function callApi(url, callback) {
    fetch(url).then(res => res.json()).then(data => {
        //console.log(data);
        callback(data);
    })
}

function stampaDati(data) {
    console.log(data);
    for (let i = 0; i < 100; i++) {
        //console.log(data[i].name);
        containerMakeup.innerHTML += `
            <div class="col-lg-4 my-3">
                 <div class="card" style="width:auto">
                 <img class="card-img-top" src="${data[i].api_featured_image}                 }" alt="Card image">
                 <div class="card-body">
                    <h4 class="card-title">${data[i].name}</h4>
                    <p class="card-text">${data[i].price} ${data[i].price_sign}</p>
                    <a href="${data[i].website_link}"target="_blank" class="btn btn-danger">Vai alla pagina</a>
                    <button data-bs-toggle="collapse" data-bs-target="#M${data[i].id}" class="btn btn-primary">Descrizione</button>
                    <div id="M${data[i].id}" class="collapse">
                    ${data[i].description }
                    </div>
                 </div>
                 </div>
            </div>
      `

    }
}