import React from 'react';
import { MovementListVm } from '../movement-list.vm';
import classes from './movement-list-table.component.module.css';
import { MovementListItemComponent } from './movement-list-item.component';

export interface Props {
  movementList: MovementListVm[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <>
      <div className={classes.tableContainer}>
        <div className={classes.headerTableContainer}>
          <span>FECHA</span>
          <span>FECHA VALOR</span>
          <span>DESCRIPCIÓN</span>
          <span>IMPORTE</span>
          <span>SALDO DISPONIBLE</span>
        </div>

        {movementList.map((movement) => (
          <MovementListItemComponent key={movement.id} movement={movement} />
        ))}
      </div>
    </>
  );
};
