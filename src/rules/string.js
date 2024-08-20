function string() {
    const inputName = this.inputName;
    let inputData = this.inputData;
    let validation = true;
    let errorMessage = `The ${inputName} must be a string.`;

    if ((typeof str === "string" && str.trim().length === 0) || str === null || /^\d+$/.test(inputData)) validation = false;

    return {
        validation,
        validatedData: inputData,
        errorMessage,
    };
}

module.exports = string;