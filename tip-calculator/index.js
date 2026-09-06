const btnCalc = document.getElementById("calculate");
const btnReset = document.getElementById("reset");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalTip = document.getElementById("total");

const calculateTotalTip = () => {
    const billAmount = billInput.value;
    const tipPercentage = tipInput.value;
    const totalTipAmount = billAmount * (1 + tipPercentage/100);
    totalTip.innerText = totalTipAmount.toFixed(2);
}

const resetValue = () => {
    billInput.value = 0;
    tipInput.value = 0;
    totalTip.innerText = 0;
}

btnCalc.addEventListener("click", calculateTotalTip);
btnReset.addEventListener("click", resetValue);