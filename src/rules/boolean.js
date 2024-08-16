function boolean() {
    const inputName = this.inputName;
    let inputData = this.inputData;
    let validation = false;
    let errorMessage = `The ${inputName} must be a boolean.`;

    if (inputData === true ||
        inputData === false ||
        inputData === 1 ||
        inputData === 0 ||
        inputData === "1" ||
        inputData === "0") validation = true;

    return {
        validation: false,
        validatedData: inputData,
        errorMessage,
    };
}

module.exports = boolean;