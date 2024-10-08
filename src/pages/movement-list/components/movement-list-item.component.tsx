import React from 'react';
import { MovementListVm } from '../movement-list.vm';
import classes from './movement-list-item.component.module.css';

export interface Props {
  movement: MovementListVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movement } = props;
  const amountColor = movement.amount < 0 ? classes.redColor : classes.blackColor;

  return (
    <div className={classes.rowTable}>
      <span>{movement.transaction.toLocaleDateString()}</span>
      <span>{movement.realTransaction.toLocaleDateString()}</span>
      <span>{movement.description}</span>
      <span className={`${amountColor}`}>{movement.amount}</span>
      <span>{movement.balance}</span>
    </div>
  );
};
