import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { ZodError } from 'zod';

type ValidationErrorField = {
  message: string;
  type: string;
  ref: Record<string, unknown>;
};

type ValidationErrors = Record<string, ValidationErrorField>;

export const validateZodErrors = (errors: ValidationErrors): string[] => {
  const errorMessages: string[] = [];

  Object.entries(errors).forEach(([_field, error]) => {
    if (error.message && error.type) {
      errorMessages.push(`${error.message}`);
    }
  });

  return errorMessages;
};

export const showValidationErrors = (errors: ValidationErrors): void => {
  const messages = validateZodErrors(errors);

  if (messages.length > 0) {
    messages.forEach(message => toast.error(message));
  } else {
    toast.error('Errores de validación encontrados');
  }
};

export const getFirstValidationError = (
  errors: ValidationErrors
): string | null => {
  const messages = validateZodErrors(errors);
  return messages.length > 0 ? messages[0] : null;
};

export const hasFieldError = (
  errors: ValidationErrors,
  fieldName: string
): boolean => {
  return fieldName in errors && errors[fieldName].message.length > 0;
};

export const getFieldError = (
  errors: ValidationErrors,
  fieldName: string
): string | null => {
  if (hasFieldError(errors, fieldName)) {
    return errors[fieldName].message;
  }
  return null;
};

const isValidationErrors = (obj: unknown): obj is ValidationErrors => {
  if (typeof obj !== 'object' || obj === null) return false;

  const record = obj as Record<string, unknown>;
  return Object.values(record).every(
    value =>
      typeof value === 'object' &&
      value !== null &&
      'message' in value &&
      'type' in value &&
      'ref' in value &&
      typeof (value as ValidationErrorField).message === 'string' &&
      typeof (value as ValidationErrorField).type === 'string'
  );
};

export const showError = (
  error: unknown,
  defaultMessage: string = 'Ocurrió un error inesperado'
) => {
  if (isValidationErrors(error)) {
    return showValidationErrors(error);
  }

  if (error instanceof ZodError) return toast.error(error.errors[0].message);

  if (error instanceof AxiosError)
    return toast.error(error.response?.data.message);

  if (error instanceof String) return toast.error(error);

  if (error instanceof Error) return toast.error(error.message);

  return toast.error(defaultMessage);
};
