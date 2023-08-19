import React from 'react';
import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/index';
import { ToDoForm } from './Features/ToDoForm';

export const ToDoWithServer = () => {
  return (
    <div className="todo">
      <MasterHeader value="TODO" />
      <p>Tutaj znajdziesz listę swoich zadań.</p>
      <ToDoForm />
    </div>
  );
};
