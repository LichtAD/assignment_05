const btnBlog = document.getElementById('btn_blog');
const btnHome = document.getElementById('btn_home');
const noaDonation = document.getElementById('btn_noa');
const feniDonation = document.getElementById('btn_feni');
const quotaDonation = document.getElementById('btn_quota');
const btnDonation = document.getElementById('btn_donation');
const btnHistory = document.getElementById('btn_history');
const hiddenHistory = document.getElementById('hidden_history');


// ! change html page
btnBlog.addEventListener('click', function () {
    // window.location.href = '/blog.html';
    window.location.href = 'https://lichtad.github.io/assignment_05/blog.html';
});


// btnHome.addEventListener('click', function () {
//     window.location.href = '/index.html';
// });


// ! noakhali
noaDonation.addEventListener('click', function () {
    const myMoney = getTextFieldValueById('my_money');
    // console.log(myMoney);

    const noaAmount = getInputFieldValueById('input_noa');
    // console.log(noaAmount);

    const check = document.getElementById('input_noa').value;
    // console.log(check);
    // console.log(noaAmount);
    if (check != noaAmount){
        alert('Invalid Donation Amount');
        return; 
    }

    if (isNaN(noaAmount) == true || noaAmount <= 0 || noaAmount[0] == '-') {
        alert('Invalid Donation Amount');
        return; 
    }

    // ! show modal only for valid inputs
    my_modal_1.showModal();

    const initialDonation = getTextFieldValueById('initial_noa_donation');
    // console.log(initialDonation);

    const totalDonation = initialDonation + noaAmount;
    // console.log(totalDonation);

    const my_present_money = myMoney - noaAmount;
    // console.log(my_present_money);

    if(my_present_money < 0) {
        alert('You do not have enough Amount');
        return; 
    }

    document.getElementById('initial_noa_donation').innerText = totalDonation;
    document.getElementById('my_money').innerText = my_present_money;

    // ! add history
    const historyItem = document.createElement("div");
    historyItem.className = 'p-6 border-2 rounded-xl space-y-2';
    historyItem.setAttribute('id', 'history_container');

    historyItem.innerHTML = `
        <h1 class="font-bold">${noaAmount} Taka is Donated for Flood Relief in Noakhali, Bangladesh</h1>
        <p class="text-xs">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `

    // console.log(historyItem);
    const historyContainer = document.getElementById("history_container");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});


// ! feni
feniDonation.addEventListener('click', function () {
    const myMoney = getTextFieldValueById('my_money');
    // console.log(myMoney);

    const feniAmount = getInputFieldValueById('input_feni');
    // console.log(feniAmount);

    const check = document.getElementById('input_feni').value;
    // console.log(check);
    // console.log(noaAmount);
    if (check != feniAmount){
        alert('Invalid Donation Amount');
        return; 
    }

    if (isNaN(feniAmount) == true || feniAmount <= 0 || feniAmount[0] == '-') {
        alert('Invalid Donation Amount');
        return; 
    }

    // ! show modal only for valid inputs
    my_modal_2.showModal();

    const initialDonation = getTextFieldValueById('initial_feni_donation');
    // console.log(initialDonation);

    const totalDonation = initialDonation + feniAmount;
    // console.log(totalDonation);

    const my_present_money = myMoney - feniAmount;
    // console.log(my_present_money);

    if(my_present_money < 0) {
        alert('You do not have enough Amount');
        return; 
    }

    document.getElementById('initial_feni_donation').innerText = totalDonation;
    document.getElementById('my_money').innerText = my_present_money;


    // ! add history
    const historyItem = document.createElement("div");
    historyItem.className = 'p-6 border-2 rounded-xl space-y-2';
    historyItem.setAttribute('id', 'history_container');

    historyItem.innerHTML = `
        <h1 class="font-bold">${feniAmount} Taka is Donated for Flood Relief in Feni, Bangladesh</h1>
        <p class="text-xs">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `

    // console.log(historyItem);
    const historyContainer = document.getElementById("history_container");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});


// ! quota movement
quotaDonation.addEventListener('click', function () {
    const myMoney = getTextFieldValueById('my_money');
    // console.log(myMoney);

    const quotaAmount = getInputFieldValueById('input_quota');
    // console.log(quotaAmount);

    const check = document.getElementById('input_quota').value;
    // console.log(check);
    // console.log(noaAmount);
    if (check != quotaAmount){
        alert('Invalid Donation Amount');
        return; 
    }

    if (isNaN(quotaAmount) == true || quotaAmount <= 0 || quotaAmount[0] == '-') {
        alert('Invalid Donation Amount');
        return; 
    }

    // ! show modal only for valid inputs
    my_modal_3.showModal();

    const initialDonation = getTextFieldValueById('initial_quota_donation');
    // console.log(initialDonation);

    const totalDonation = initialDonation + quotaAmount;
    // console.log(totalDonation);

    const my_present_money = myMoney - quotaAmount;
    // console.log(my_present_money);

    if(my_present_money < 0) {
        alert('You do not have enough Amount');
        return; 
    }

    document.getElementById('initial_quota_donation').innerText = totalDonation;
    document.getElementById('my_money').innerText = my_present_money;


    // ! add history
    const historyItem = document.createElement("div");
    historyItem.className = 'p-6 border-2 rounded-xl space-y-2';
    historyItem.setAttribute('id', 'history_container');

    historyItem.innerHTML = `
        <h1 class="font-bold">${quotaAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        <p class="text-xs">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>
    `

    // console.log(historyItem);
    const historyContainer = document.getElementById("history_container");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});


// ! hidden history
btnHistory.addEventListener('click', function () {
    hiddenHistory.classList.remove('hidden');
    document.getElementById('card_container').classList.add('hidden');

    btnHistory.classList.add('bg-color_lime', 'font-bold');
    btnHistory.classList.remove('bg-white');

    btnDonation.classList.remove('bg-color_lime', 'font-bold');
    btnDonation.classList.add('bg-white');
});

// ! hide card and change color of button
btnDonation.addEventListener('click', function () {
    hiddenHistory.classList.add('hidden');
    document.getElementById('card_container').classList.remove('hidden');

    btnHistory.classList.remove('bg-color_lime', 'font-bold');
    btnHistory.classList.add('bg-white');

    btnDonation.classList.add('bg-color_lime', 'font-bold');
    btnDonation.classList.remove('bg-white');
});

