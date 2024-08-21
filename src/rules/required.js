function digits() {
    const inputName = this.inputName;
    let inputData = this.inputData;
    let validation = true;
    let errorMessage = `The ${inputName} field is required.`;

    if (inputData === null || inputData.toString().length == 0) validation = false;

    return {
        validation,
        validatedData: inputData,
        errorMessage,
    };
}

module.exports = digits;