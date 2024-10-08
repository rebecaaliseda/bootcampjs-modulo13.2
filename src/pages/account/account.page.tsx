import { AppLayout } from '@/layouts';
import React from 'react';
import classes from './account.page.module.css';
import { AccountFormComponent } from './components';
import { AccountVm } from './account.vm';
import { mapAccountFromVmToApi } from './account.mapper';
import { addAccount } from './api/account.api';

export const AccountPage: React.FC = () => {
  const handleSubmit = (account: AccountVm) => {
    const createdAccount = mapAccountFromVmToApi(account);
    addAccount(createdAccount).then((result) => {
      if (result) {
        alert('Cuenta agregada con éxito');
      } else {
        alert(' Ha habido un error al agregar la cuenta');
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>Cuenta Bancaria</h1>
        </div>
        <AccountFormComponent onCreateAccount={handleSubmit} />
      </div>
    </AppLayout>
  );
};
