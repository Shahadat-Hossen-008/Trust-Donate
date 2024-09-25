document.getElementById("show-donation").addEventListener('click', function(){
    showSectionById('donate-section');
    document.getElementById("show-donation").classList.add('bg-btn_color');
    document.getElementById("show-donation-transaction").classList.remove('bg-btn_color');
})


document.getElementById("show-donation-transaction").addEventListener("click", function(){
    showSectionById('transaction-history');
    document.getElementById("show-donation-transaction").classList.add('bg-btn_color');
    document.getElementById("show-donation").classList.remove('bg-btn_color');
})