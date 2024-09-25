// Donation Noakhali
document.getElementById("add-donate-btn-card-1").addEventListener("click", function(){
    const donateForNoakhali = inputValueById("donation-for-noakhali");
    const currentBalance = stringConvertNumber("get-balance");
    if(isNaN(donateForNoakhali) || 0>donateForNoakhali){
        return
    }
    else{
        showModal("add-donate-btn-card-1", "my_modal_1")
        const newBalance = donateForNoakhali + currentBalance;
    document.getElementById("get-balance").innerText = newBalance;
    }

   transactionHistory("donation-for-noakhali", "heading-tittle-1" );

    
    document.getElementById("donation-for-noakhali").value =  "";
   const minusBalance = minusBalanceNumber();
   const balance = minusBalance - donateForNoakhali;
   document.getElementById("minus-balance").innerText = balance;
    
})

// Donation for feni
document.getElementById("donate-for-feni").addEventListener("click", function(){
    const donateForFeni = inputValueById("input-donation-feni");
    const currentBalance = stringConvertNumber("get-balance-feni");
    if(isNaN(donateForFeni) || 0>donateForFeni){
        return
    }
    else{
        showModal("donate-for-feni", "my_modal_2")
        const newBalance = currentBalance + donateForFeni;
    document.getElementById("get-balance-feni").innerText = newBalance;
    }
    transactionHistory("input-donation-feni", "heading-tittle-2" );
    const minusBalance = minusBalanceNumber();
   const balance = minusBalance - donateForFeni;
   document.getElementById("minus-balance").innerText = balance;

    document.getElementById("input-donation-feni").value =  "";

    
})


// donation for injured people
document.getElementById("donation-for-quota").addEventListener("click", function(){
    const donateForQuota = inputValueById("input-donate-quota");
    const currentBalance = stringConvertNumber("get-balance-quota");

    if(isNaN(donateForQuota) || 0>donateForQuota){
        return;
    }
    else{
        showModal("donation-for-quota", "my_modal_3")
        const newBalance = currentBalance + donateForQuota;
    document.getElementById("get-balance-quota").innerText = newBalance;
    }
    transactionHistory("input-donate-quota", "heading-tittle-3" );
    // Challenge part
    const minusBalance = minusBalanceNumber();
   const balance = minusBalance - donateForQuota;
   document.getElementById("minus-balance").innerText = balance;

    document.getElementById("input-donate-quota").value ="";



})