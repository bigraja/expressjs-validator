const booleanF = require('./rules/boolean.js');
const email = require('./rules/email.js');
const string = require('./rules/string.js');
const digits = require('./rules/digits.js');

const allRules = {
    "email": email,
    "email": string,
    "boolean": booleanF,
    "digits": digits,
};

/**
 * 
 * @param {object} inputsData - validator input data
 * @param {object} inputsRules - validator rules Function
 * @param {object} customMessages - costom error messages
 * @returns {object} {validation: boolen, validated: 'validated data object',errorMessages:'error message object'}
 */

function validator(inputsData = {}, inputsRules = {}, customMessages = {}) {

    const validateData = {};
    const errorMessages = {};

    for (const inputName in inputsRules) {
        if (Object.prototype.hasOwnProperty.call(inputsRules, inputName)) {
            const validationRules = inputsRules[inputName];

            validationRules.forEach(ruleString => {

                const { ruleFunction, ruleFunctionArg } = getRuleFunction(ruleString);
                const inputData = inputsData[inputName];

                const { validation, errorMessage, validatedData } = callRuleFunction(ruleFunction, ruleFunctionArg, inputName, inputData);

                if (validation) {

                    if (validateData) {
                        inputsData[inputName] = validatedData;
                        validateData[inputName] = validatedData;
                    } else {
                        delete inputsData[inputName];
                        delete validateData[inputName];
                    }

                } else {
                    if (!Array.isArray(errorMessages[inputName])) { errorMessages[inputName] = []; }
                    const custommessageCheck = customMessages[inputName] ? customMessages[inputName][ruleString] : null;
                    if (custommessageCheck) { errorMessage = customMessages; }
                    errorMessages[inputName].push(errorMessage);
                }

            });

        }
    }

    return {
        validation: (Object.keys(errorMessages).length) ? false : true,
        validated: validateData,
        errorMessages: errorMessages
    };

}

/**
 * 
 * @param {object} rules - {'email': emailRuleFunction}
 */

function useRule(rules) {
    for (const name in rules) {
        if (Object.prototype.hasOwnProperty.call(rules, name)) {
            const rule = rules[name];
            allRules[name] = rule;
        }
    }
}

function callRuleFunction(ruleFunction, ruleFunctionArg, inputName, inputData) {
    const { validation, errorMessage, validatedData } = ruleFunction.apply(
        {
            "inputData": inputData,
            "inputName": inputName,
        }, ruleFunctionArg);

    return { validation, errorMessage, validatedData };
}

function getRuleFunction(ruleFunctionArgString) {
    let ruleFunction = allRules[ruleFunctionArgString];
    let ruleFunctionArg = [];

    if (ruleFunctionArgString.search(":")) {
        let functionArgString, functionString;
        [functionString, functionArgString] = ruleFunctionArgString.split(":");
        ruleFunction = allRules[functionString];
        ruleFunctionArg = functionArgString.split(",");
    }

    return { ruleFunction, ruleFunctionArg };
}

module.exports = { validator, useRule };