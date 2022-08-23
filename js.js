const cartArray = [];

function addToCart(element){
    
    // console.log(element.parentNode.parentNode.children[0].innerText) 
const playerName = element.parentNode.parentNode.children[0].innerText;

const playerObj = {
    playerName:playerName
}
cartArray.push(playerObj);
// console.log(cartArray);
document.getElementById('totalPlayer').innerText = cartArray.innerText;

}

const players = document.getElementsByClassName('player');
for(const player of players){

player.addEventListener('click' , function(event){
    event.target.parentNode
})

}