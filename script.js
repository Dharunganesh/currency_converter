function convert(){
    let amount=document.getElementById("input_amount1").value;
    let fromCurrency = document.getElementById("from_currency").value;
    let toCurrency = document.getElementById("to_currency").value;
    let convertedAmount = 0;
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    if (fromCurrency === toCurrency) {
        convertedAmount = amount;
    } else {
        const rates = {
            USD: { INR: 83, POUND: 0.79 },
            INR: { USD: 0.012, POUND: 0.0095 },
            POUND: { USD: 1.26, INR: 105 }
        };
        convertedAmount = amount * rates[fromCurrency][toCurrency];
    }
    document.getElementById("output_amount1").value = convertedAmount.toFixed(2);
}
