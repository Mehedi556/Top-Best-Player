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





display(palyersArray);

}

document.getElementById('button-calculate').addEventListener('click' , function erase(){
    const playersNumber = document.getElementById('total-added-player').innerText = palyersArray.length;
    const playersNumberString = parseFloat(playersNumber);

    const perPlayers = document.getElementById('perPlayerField').value;

    const playerExpenses = perPlayers * playersNumberString;
   
    
    document.getElementById('perPlayerField').value = '';
    
document.getElementById('player-expenses').innerText = playerExpenses;
})




document.getElementById('calculate-total-btn').addEventListener('click' , function cut(){
    const playersCostString = document.getElementById('player-expenses').innerText;
    const playersCost = parseFloat(playersCostString);
   


    const managerFieldString = document.getElementById('manager-field').value;
    const managerField = parseFloat(managerFieldString);

    const coachFieldString = document.getElementById('coach-field').value;
    const coachField = parseFloat(coachFieldString);


    const otherExpensesString = managerField + coachField;

   
    
   const totalExpenses = otherExpensesString + playersCost;
    
console.log(totalExpenses);

const calculateTotalString = document.getElementById('calculate-total');
const calculateTotal = calculateTotalString.innerText = totalExpenses;


document.getElementById('manager-field' , 'coach-field').value = '';
document.getElementById('coach-field').value = '';
})


function disable(x){
    x.disabled = true;
}
    

