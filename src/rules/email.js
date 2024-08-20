function email() {
    const inputName = this.inputName;
    let inputData = this.inputData;
    let validation = false;
    let errorMessage = `The ${inputName} must be a valid email address.`;

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailRegex.test(inputData)) validation = true;

    return {
        validation,
        validatedData: inputData,
        errorMessage,
    };
}

module.exports = email;