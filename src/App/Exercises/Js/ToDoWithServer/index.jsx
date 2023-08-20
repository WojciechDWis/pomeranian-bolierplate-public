import React from 'react';
import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/index';
import { ToDoForm } from './Features/ToDoForm/ToDoForm';
import { useState } from 'react';
import { ToDoList } from './Features/ToDoList/ToDoList';

export const ToDoWithServer = () => {
  //statusy: list / add / edit
  const [state, setState] = useState('list');
  const [editId, setEditId] = useState();

  const handleAddToDo = () => {
    setState('add');
  };

  const handleGoBack = () => {
    setState('list');
  };

  const handleEdit = (id) => {
    setState('edit');
    setEditId(id);
    console.log(id);
  };
  return (
    <div className="todo">
      <MasterHeader value="TODO" />
      {state === 'list' && (
        <ToDoList handleAddToDo={handleAddToDo} handleEdit={handleEdit} />
      )}
      {state === 'add' && <ToDoForm handleGoBack={handleGoBack} isAddForm />}
      {state === 'edit' && <ToDoForm handleGoBack={handleGoBack} id={editId} />}
    </div>
  );
};
