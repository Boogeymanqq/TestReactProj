export const required = (value) => {
  if (value) return undefined;

  return 'Field is required!';
};

// Проверка на валидный email
export const validateEmail = (value) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return 'Invalid email address!';
  }
  return undefined;
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) return `Max length ${{ maxLength }} symbols!`;

  return undefined;
};

export const minLength = (value) => {
  if (value && value.length < 2) return 'Min length 2 symbols!';

  return undefined;
};
