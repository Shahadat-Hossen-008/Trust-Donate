function inputValueById(id){
    let inputValue = document.getElementById(id).value;
    if(isNaN(inputValue) || 0>inputValue){
        alert("Invalid Donation Amount");
        return;

    }
    else{
      const btn = document.getElementById("add-donate-btn-card-1");
      btn.onclick = my_modal_1.showModal();
    }
    const inputNumber = parseFloat(inputValue);

    const getBalance = document.getElementById("minus-balance").innerText;
    const getBalanceNumber = parseFloat(getBalance);
    const minusBalance = getBalanceNumber - inputNumber;
    document.getElementById("minus-balance").innerText = minusBalance;
    return inputNumber;
}


function stringConvertNumber(id){
    const string = document.getElementById(id).innerText;
    const number = parseFloat(string);
    return number;
}

function minusBalanceNumber(){
    const getBalance = document.getElementById("minus-balance").innerText;
    const getBalanceNumber = parseFloat(getBalance);
    return getBalanceNumber;
}