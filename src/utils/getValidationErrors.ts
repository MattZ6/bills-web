import { ValidationError } from 'yup';

interface FormErrors {
  [key: string]: string;
}

export default function getValidationErrors(
  error: ValidationError,
): FormErrors {
  const formErrors: FormErrors = {};

  error.inner.forEach((x) => {
    formErrors[x.path] = x.message;
  });

  return formErrors;
}
