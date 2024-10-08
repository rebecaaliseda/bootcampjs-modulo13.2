import React from 'react';
import classes from './movement-list-header.component.module.css';

import { getAccountList } from '@/pages/account-list/api';
import { mapAccountListFromApiToVm } from '@/pages/account-list/account-list.mapper';
import { useParams } from 'react-router-dom';
import { AccountVm } from '../movement-list.vm';

export const MovementListHeaderComponent: React.FC = () => {
  const { id } = useParams();
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) => setAccountList(mapAccountListFromApiToVm(result)));
  }, []);

  return (
    <div className={classes.header}>
      <div className={classes.firstHeader}>
        <h2>Saldos y últimos movimientos</h2>
        <div className={classes.availableBalance}>
          <div className={classes.textBalance}>SALDO DISPONIBLE</div>
          <div className={classes.numberBalance}>
            {accountList.map((account) => {
              if (account.id === id) {
                return `${account.balance} €`;
              } else {
                return '';
              }
            })}
          </div>
        </div>
      </div>
      <div className={classes.secondHeader}>
        <p>Alias: Gastos mes</p>
        <p>
          {accountList.map((account) => {
            if (account.id === id) {
              return `IBAN: ${account.iban}`;
            } else {
              return '';
            }
          })}
        </p>
      </div>
    </div>
  );
};
