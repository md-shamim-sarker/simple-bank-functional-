// withdraw calculation
document.getElementById('withdraw-button').addEventListener('click', () => {
    const inputValue = gettingDataFromInputField('withdraw-field');
    const previousWithdraw = gettingDataFromElement('withdraw');
    const presentWithdraw = inputValue + previousWithdraw;
    const previousBalance = gettingDataFromElement('balance');
    const presentBalance = previousBalance - inputValue;
    settingDataToElement('withdraw', presentWithdraw);
    settingDataToElement('balance', presentBalance);
});