const digits = require('./../src/rules/digits');


test('1 digits number check', () => {

  let inputName = "digit";
  let inputData = "5";
  let arg = [1];

  expect(digits.apply({ inputName, inputData }, [1])).toEqual({
    validation: true,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('2 digits number check', () => {

  let inputName = "digit";
  let inputData = "53";
  let arg = [2];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: true,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('3 digits number check', () => {

  let inputName = "digit";
  let inputData = "200";
  let arg = [3];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: true,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('4 digits number check', () => {

  let inputName = "digit";
  let inputData = "9999";
  let arg = [4];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: true,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('5 digits number check', () => {

  let inputName = "digit";
  let inputData = "10000";
  let arg = [5];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: true,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('3 digits float number check', () => {

  let inputName = "digit";
  let inputData = "101.0000";
  let arg = [3];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: true,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('4 digits float number check', () => {

  let inputName = "digit";
  let inputData = "9999.999";
  let arg = [4];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: true,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('5 digits float number check', () => {

  let inputName = "digit";
  let inputData = "10000.332";
  let arg = [5];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: true,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('Wrong number check', () => {

  let inputName = "digit";
  let inputData = "100009.332";
  let arg = [5];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: false,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});


test('Wrong number check 2', () => {

  let inputName = "digit";
  let inputData = "1000090.5332";
  let arg = [5];

  expect(digits.apply({ inputName, inputData }, arg)).toEqual({
    validation: false,
    validatedData: inputData,
    errorMessage: `The ${inputName} must be ${arg[0]} digit.`,
  });
});