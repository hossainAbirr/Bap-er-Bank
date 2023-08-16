document.getElementById('btn-deposit').addEventListener('click', function(event){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmountNumber = parseFloat(newDepositAmountString)
    depositField.value = "";
    if(isNaN(newDepositAmountNumber)){
        alert('input numbers only')
        return
    }

    const previousDepositTotalElement = document.getElementById('deposit');
    const previousDepositTotalString = previousDepositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotalNumber + newDepositAmountNumber;
    previousDepositTotalElement.innerText = currentDepositTotal;

    const previousBalanceElement = document.getElementById('balance');
    const previousBalanceTotalString = previousBalanceElement.innerText;
    const previousBalanceTotalNumber = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotalNumber + newDepositAmountNumber
    previousBalanceElement.innerText = currentBalanceTotal;


    // console.log(typeof newDepositAmountNumber);

});

document.getElementById('btn-withdraw').addEventListener('click', function(event){
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmountStringToNumber = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';
    if(isNaN(newWithdrawAmountStringToNumber)){
        alert('teha sara kisu chini na')
        return
    }

    const withdrawElement = document.getElementById('withdraw');
    const previousWithdrawAmountString = withdrawElement.innerText;
    const previousWithdrawAmountStringToNumber = parseFloat(previousWithdrawAmountString);


    const previousBalanceElement = document.getElementById('balance');
    const previousBalanceTotalString = previousBalanceElement.innerText;
    const previousBalanceTotalNumber = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmountStringToNumber > previousBalanceTotalNumber){
        alert('eto teha nai kamai kor ga');
        return
    }

    const currentTotalWithdrawAmount = previousWithdrawAmountStringToNumber + newWithdrawAmountStringToNumber;
    withdrawElement.innerText = currentTotalWithdrawAmount;

    const newCurrentBalanceTotal = previousBalanceTotalNumber - newWithdrawAmountStringToNumber;
    
    previousBalanceElement.innerText = newCurrentBalanceTotal;

})

        