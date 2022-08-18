// getting data from input field
function gettingDataFromInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = Number(inputValueString);
    return inputValue;
}

// getting data from element field
function gettingDataFromElement(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = Number(elementValueString);
    return elementValue;
}

// setting data to element field
function settingDataToElement(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}