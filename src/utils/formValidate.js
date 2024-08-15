
export const validate = values => {
  const errors = {};

  if (!values.Email) {
    errors.Email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)) {
    errors.Email = 'Invalid email address';
  }

  return errors;
};
