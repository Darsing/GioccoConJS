refreschDog();
document.querySelector('#fetch-dog').addEventListener('click',async ()=>{
    refreschDog();
     
})

async function refreschDog(){
    var fetchResult=  await fetch("https://random.dog/woof.json")
    var data = await fetchResult.json();
    //console.log(data.url);
      if(data.url.includes('.mp4')){
        refreschDog();
        return;
      }
      
      document.querySelector('#img-fetch').innerHTML=`
      <img src=${data.url} alt="img-dog" width:"400px" >
      `
}