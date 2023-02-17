const btnEl =document.getElementById('btn');
const apikeys="ECsV76sGY6AMffXfS26EZQ==6LUOqVbp9nBy2nHn";
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method:"GET",
    Headers: {
      "X-Api-Key": apikeys,
    }
};

async function GetJoke(){
    const response =await fetch(apiURL, options);
    const data = await response.json();
    console.log(data);       
}

btnEl.addEventListener('click', GetJoke);

//video javaScript King