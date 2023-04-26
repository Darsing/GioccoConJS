const url = "https://jsonplaceholder.typicode.com/albums";

/*
getApi1(url);
function getApi1(url) {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.responseType = 'json';
    req.send();
    req.onload = function () {
        let data = req.response;
        //console.log(data);

        //popolaParagrafo(data);
        creaTabella(data);
    }
}



//function popolaParagrafo(data){
//  const p = document.querySelector('p');
 // p.innerText = data[0].id +') ' +data[0].title
//}


//ciclare l array
//per ogni elemento dell array:
//creare una riha nella tabella
//creare 3 celle con i dati:id album titolo e user id
function creaTabella(albums) {

    const tbody = document.querySelector('tbody');

    for (a of albums) {
        tbody.innerHTML += `
          <tr>
            <td>${a.id}</td>
            <td>${a.title}</td>
            <td>${a.userId}</td>
          </tr>
         `
    }

}
*/
// un altro 
const urlPhotos = "https://jsonplaceholder.typicode.com/photos";
const photo1 = document.querySelector('#photo1');
const divPhotos = document.querySelector('#photos');

getApi2(urlPhotos);

function getApi2(url) {
    const req = new XMLHttpRequest();
    req.open('GET', urlPhotos);
    req.responseType = 'json';
    req.send();
    req.onload = function () {
        let data = req.response;
        //console.log(data);
        //stampaPhoto1(data);
        stampaPhotos(data);
    }

}

/*
function stampaPhoto1(photos) {
    console.log(photos[0]);
    photo1.innerHTML += `
    <div class="card" style="width:400px">
    <img class="card-img-top" src="${photos[0].thumbnailUrl}" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">${photos[0].id}</h4>
      <p class="card-text">${photos[0].title}</p>
      <p class="card-text">
      <a href="${photos[10].url}" target="_blank" class="btn btn-primary">clicca qui</a>
      </p>
      
    </div>
  </div>
    `
}
*/

function stampaPhotos(photos) {
    //console.log(photos);

    for (let i = 0; i < 10; i++) {

        divPhotos.innerHTML += `
    <div class="col-lg-4">
       <div class="card" style="width:400px">
       <img class="card-img-top" src="${photos[i].thumbnailUrl}" alt="Card image">
         <div class="card-body">
           <h4 class="card-title">${photos[i].id}</h4>
           <p class="card-text">${photos[i].title}</p>
           <p class="card-text">
           <a href="${photos[i].url}" target="_blank" class="btn btn-primary">clicca qui</a>
       </p>
      
         </div>
     </div>
    </div>
    `
    }


}
