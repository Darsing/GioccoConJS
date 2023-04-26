const url ='./data/data.json'
const req = new XMLHttpRequest();
    req.open('GET', url);
    req.responseType = 'json';
    req.send();
    req.onload = function () {
        let data = req.response;
        console.log(data);

        for(p of data.data){
            console.log(p.nome);
        }
    }