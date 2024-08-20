function digits(digitLength) {
    const inputName = this.inputName;
    let inputData = this.inputData;
    let validation = false;
    let errorMessage = `The ${inputName} must be ${digitLength} digit.`;

   if (Number(inputData) && Number(inputData).toString().length == digitLength) validation = true;

    return {
        validation,
        validatedData: inputData,
        errorMessage,
    };
}

module.exports = digits;