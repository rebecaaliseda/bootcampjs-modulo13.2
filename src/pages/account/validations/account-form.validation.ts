import { FormValidationResult } from '@/common/validations';
import { AccountError, AccountVm } from '../account.vm';
import { validateAccountType, validateNameField } from './account-field.validation';

export const validateForm = (account: AccountVm): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateAccountType(account.type),
    validateNameField(account.name),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? '',
      name: fieldValidationResults[1].errorMessage ?? '',
    },
  };
};
