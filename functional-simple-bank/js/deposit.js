// deposit calculation
document.getElementById('deposit-button').addEventListener('click', () => {
    const inputValue = gettingDataFromInputField('deposit-field');
    const previousDeposit = gettingDataFromElement('deposit');
    const presentDeposit = inputValue + previousDeposit;
    const previousBalance = gettingDataFromElement('balance');
    const presentBalance = inputValue + previousBalance;
    settingDataToElement('deposit', presentDeposit);
    settingDataToElement('balance', presentBalance);
});