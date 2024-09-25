function inputValueById(id){
    let inputValue = document.getElementById(id).value;
    if(isNaN(inputValue) || 0>inputValue){
        alert("Invalid Donation Amount");
        return;

    }
    const inputNumber = parseFloat(inputValue);

    const getBalance = document.getElementById("minus-balance").innerText;
    const getBalanceNumber = parseFloat(getBalance);
    const minusBalance = getBalanceNumber - inputNumber;
    document.getElementById("minus-balance").innerText = minusBalance;

    return inputNumber;
}
  
function showModal(id1, id2){
    const btn = document.getElementById(id1);
    const modal = document.getElementById(id2);
    btn.onclick = modal.showModal();
}


function stringConvertNumber(id){
    const string = document.getElementById(id).innerText;
    const number = parseFloat(string);
    return number;
}

// showcase function

function showSectionById(id){
   document.getElementById("donate-section").classList.add('hidden');
   document.getElementById("transaction-history").classList.add('hidden');
   document.getElementById(id).classList.remove('hidden');

}

function transactionHistory(id1, id2){
    let inputNumber = document.getElementById(id1).value;
    const tittle = document.getElementById(id2).innerText;
    const d = new Date();
    const div = document.createElement("div");
    div.classList.add('border');
    div.classList.add('rounded-xl')
    div.classList.add('shadow-md')
    div.classList.add('w-9/12')
    div.classList.add('mx-auto');
    div.classList.add('p-7');
    div.classList.add('mb-5')
    div.innerHTML = `
    <p class= "text-xl font-semibold pb-2">${inputNumber} Taka is Donated for ${tittle} </p>
    <p class="text-gray-500 text-base">${d}</p>
    `;
    document.getElementById("transaction-history").appendChild(div);
}