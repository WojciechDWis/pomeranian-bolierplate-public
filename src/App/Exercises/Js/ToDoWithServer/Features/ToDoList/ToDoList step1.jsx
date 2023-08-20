import './styles.css';
import { useState } from 'react';
import { Button } from '../../Components';
import { useEffect } from 'react';
import { ToDoCard } from '../ToDoCard/ToDoCard';

const BASE_URL = 'http://localhost:3333';

const TODOS = [
  {
    id: 1,
    title: 'Todo 1',
    createdAt: '2021-05-22T11:20:22.935Z',
    author: 'Anonymous',
    isDone: false,
    doneDate: '2021-05-22T11:20:22.935Z',
    note: 'Done the course',
  },
  {
    id: 3,
    title: 'Todo 3',
    note: '',
    author: 'Anonymous',
    isDone: false,
    createdAt: '2023-08-19T08:33:48.073Z',
  },
  {
    id: 4,
    title: 'nowe zadanie',
    note: 'nakarm koty',
    author: 'krzysiek',
    isDone: false,
    createdAt: '2023-08-19T08:34:35.517Z',
  },
  {
    id: 5,
    title: 'todo 18',
    note: 'Poprowadzić kurs',
    author: 'Michał',
    isDone: false,
    createdAt: '2023-08-19T08:37:13.798Z',
  },
];

export const ToDoList = ({ handleAddToDo }) => {
  const [todos, setTodos] = useState([]);
  const [isGetListError, setIsGetListError] = useState();
  const [markAsDoneErrors, setMarkAsDoneErrors] = useState([]);
  const [deleteErrors, setDeleteErrors] = useState([]);

  const getAllToDos = async () => {
    const requestPath = BASE_URL + 'api/todo/';
    try {
      const response = await fetch(requestPath);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      setTodos(data);
      setIsGetListError(false);
    } catch (error) {
      setIsGetListError(true);
      setTodos([]);
    }
  };

  useEffect(() => {
    getAllToDos();
  }, []);

  const handleRefresh = () => {
    getAllToDos();
  };

  const handleMarkAsDone = (id) => {
    const success = Math.random() > 0.5;
    if (success) {
      setTodos((currentTodos) => {
        return currentTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: true,
              doneDate: new Date().toISOString(),
            };
          } else {
            return todo;
          }
        });
      });
    } else {
      setMarkAsDoneErrors((errors) => [...errors, id]);
    }
  };
  useEffect(() => {
    if (markAsDoneErrors.length > 0) {
      setTimeout(() => setMarkAsDoneErrors([]), 1000);
    }
  }, [markAsDoneErrors]);

  const handleDelete = async (id) => {
    const requestPath = `api/todo/${id}`;
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers, method: 'DELETE' };
    try {
      const response = await fetch(BASE_URL + requestPath, options);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      setTodos((currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== id);
      });
    } catch (error) {
      setDeleteErrors((errors) => [...errors, id]);
    }
  };
  useEffect(() => {
    if (deleteErrors.length > 0) {
      setTimeout(() => setDeleteErrors([]), 1000);
    }
  }, [deleteErrors]);

  return (
    <div className="todo-form__list">
      <p>Tutaj znajdziesz listę swoich zadań.</p>
      <div className="todo-list__containerList">
        {todos.map((todo) => (
          <ToDoCard
            key={todo.id}
            todo={todo}
            handleMarkAsDone={() => handleMarkAsDone(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
            isMarkAsDoneError={markAsDoneErrors.some(
              (errorId) => errorId === todo.id
            )}
            isDeleteError={deleteErrors.some((errorId) => errorId === todo.id)}
          />
        ))}
        {isGetListError && (
          <>
            {' '}
            <p>Przepraszamy. Nie udało się pobrać listy zadań.</p>
            <Button onClick={handleRefresh}>Odśwież widok</Button>
          </>
        )}
        {!isGetListError && todos.length === 0 && (
          <>
            <p>Brawo! Nie masz aktualnie żadnych zadań do zrealizowania</p>
            <Button onClick={handleAddToDo}>Dodaj Zadanie</Button>
          </>
        )}
      </div>
      {todos.length > 0 && <Button onClick={handleAddToDo}>Dodaj</Button>}
    </div>
  );
};
