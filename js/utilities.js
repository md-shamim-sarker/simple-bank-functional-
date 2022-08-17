function calFunction(num) {
    const inputCollection = document.getElementById('input-field').value;
    const inputValue = Number(inputCollection);
    const resultValue = inputValue * num;
    if (isNaN(resultValue) || typeof resultValue === 'undefined' || resultValue === 0) {
        alert("Please Enter A Number.");
        return '';
    }
    return resultValue;
}