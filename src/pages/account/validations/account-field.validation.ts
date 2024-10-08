import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSuccededResult,
  FieldValidationResult,
  isStringValueInformed,
} from '@/common/validations';

export const validateAccountType = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSuccededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSuccededResult();
};
