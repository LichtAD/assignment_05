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
    window.location.href = '/blog.html';

    btnBlog.classList.toggle("hidden");
    btnHome.classList.toggle("hidden");
});


btnHome.addEventListener('click', function () {
    window.location.href = '/index.html';

    btnBlog.classList.remove('hidden');
    btnHome.classList.add('hidden');
});


// ! noakhali
noaDonation.addEventListener('click', function () {
    const myMoney = getTextFieldValueById('my_money');
    // console.log(myMoney);

    const noaAmount = getInputFieldValueById('input_noa');
    // console.log(noaAmount);

    if (isNaN(noaAmount) == true || noaAmount <= 0) {
        return alert('Invalid Donation Amount');
    }

    const initialDonation = getTextFieldValueById('initial_noa_donation');
    // console.log(initialDonation);

    const totalDonation = initialDonation + noaAmount;
    // console.log(totalDonation);

    const my_present_money = myMoney - noaAmount;
    // console.log(my_present_money);

    document.getElementById('initial_noa_donation').innerText = totalDonation;
    document.getElementById('my_money').innerText = my_present_money;

    // ! add history
    
});


// ! feni
feniDonation.addEventListener('click', function () {
    const myMoney = getTextFieldValueById('my_money');
    // console.log(myMoney);

    const feniAmount = getInputFieldValueById('input_feni');
    // console.log(feniAmount);

    if (isNaN(feniAmount) == true || feniAmount <= 0) {
        return alert('Invalid Donation Amount');
    }

    const initialDonation = getTextFieldValueById('initial_feni_donation');
    // console.log(initialDonation);

    const totalDonation = initialDonation + feniAmount;
    // console.log(totalDonation);

    const my_present_money = myMoney - feniAmount;
    // console.log(my_present_money);

    document.getElementById('initial_feni_donation').innerText = totalDonation;
    document.getElementById('my_money').innerText = my_present_money;
});


// ! quota movement
quotaDonation.addEventListener('click', function () {
    const myMoney = getTextFieldValueById('my_money');
    // console.log(myMoney);

    const quotaAmount = getInputFieldValueById('input_quota');
    // console.log(quotaAmount);

    if (isNaN(quotaAmount) == true || quotaAmount <= 0) {
        return alert('Invalid Donation Amount');
    }

    const initialDonation = getTextFieldValueById('initial_quota_donation');
    // console.log(initialDonation);

    const totalDonation = initialDonation + quotaAmount;
    // console.log(totalDonation);

    const my_present_money = myMoney - quotaAmount;
    // console.log(my_present_money);

    document.getElementById('initial_quota_donation').innerText = totalDonation;
    document.getElementById('my_money').innerText = my_present_money;
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

