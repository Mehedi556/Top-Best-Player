const palyersArray = [];

function display(playersCart){
console.log(playersCart);
const tableBody = document.getElementById('players-cart');
tableBody.innerHTML = '';
for(let i = 0; i < playersCart.length; i++){
    // console.log(playersCart[i].playerName);
    const name = playersCart[i].playerName;

const tr = document.createElement("tr");
tr.innerHTML = `
<th>${i + 1}</th>
<td>${name}</td>
`;
tableBody.appendChild(tr);
}
}

function addToCart(element){
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);
    const playersObj = {
        playerName:playerName
    }
palyersArray.push(playersObj)
//     console.log(palyersArray);
// console.log(palyersArray.length);

document.getElementById('total-added-player').innerText = palyersArray.length;

display(palyersArray)

}


