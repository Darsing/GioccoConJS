
class Deck {

    constructor(){
        this.carte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "fante", "donna", "re"];
        console.log("genero nuovo mazzo", this.carte);
        
    }
    mischia(){
        this.carte.sort((a,b)=>{
         return    0.5 - Math.random();
        })
        console.log("mazzo mischiato", this.carte);
    }
}



const deck = new Deck();
deck.mischia();
//deck.pesca();
//deck.mettiSotto('jolly');
