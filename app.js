document.getElementById("loan-form").addEventListener("submit", function (e) {

    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateResult, 1000);
    e.preventDefault()
});


function calculateResult(){


    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const Years = document.getElementById("Years");
    const monthlypayment = document.getElementById("monthly-payment");
    const totalpayment = document.getElementById("total-payment");
    const totalinterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest =parseFloat(interest.value)/100/12;
    const calculatePayment =parseFloat(Years.value)*12;

    const x = Math.pow(1 + calculatedInterest, calculatePayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    if (isFinite(monthly)){
        monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly*calculatePayment).toFixed(2);
        totalinterest.value = ((monthly*calculatePayment)-principal).toFixed(2);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }
    else {
        showerror('please check your numbers');
    }


}

function showerror(error) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    const errordiv = document.createElement('div');
    errordiv.className = "alert alert-danger";

    errordiv.appendChild(document.createTextNode(error));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errordiv, heading);
    setTimeout(clearError, 3000);


}

function clearError() {
    document.querySelector('.alert').remove();
}


