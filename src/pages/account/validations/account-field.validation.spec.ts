import { validateNameField, validateAccountType } from './account-field.validation';

describe('account-field.validation specs', () => {
  it('Validation should be successful if account type is selected', () => {
    const value = 'checking';
    const result = validateAccountType(value);
    expect(result.succeeded).toBeTruthy();
  });

  it('Validation should fail if account type is not selected', () => {
    const value = '';
    const result = validateAccountType(value);
    expect(result.succeeded).toBeFalsy();
    expect(result.errorMessage).toEqual('Debe informar el campo');
  });

  it('Validation should be successful if the "alias" field is informed', () => {
    const value = 'Ahorro';
    const result = validateNameField(value);
    expect(result.succeeded).toBeTruthy();
  });

  it('Validation should fail if the "alias" field is not informed', () => {
    const value = '';
    const result = validateNameField(value);
    expect(result.succeeded).toBeFalsy();
    expect(result.errorMessage).toEqual('Debe informar el campo');
  });
});
