import { useEffect, useState } from 'react';
import { Button, Label, Input, InputTextArea } from '../../Components';
import { LocalDevApiClient } from '../../../../../ApiClients/LocalDevApiClient';
import './styles.css';

const BASE_URL = 'http://localhost:3333/';
const apiClient = new LocalDevApiClient({ baseUrl: BASE_URL });

export function ToDoForm({ handleGoBack, isAddForm, id }) {
  const [isError, setIsError] = useState(false);
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  const getApiPromiseForSubmit = () => {
    if (isAddForm) {
      return apiClient.addToDo({ author, note, title });
    } else {
      return Promise.reject('Not implemented');
    }
  };

  useEffect(() => {
    console.log(isAddForm, id);
    if (!isAddForm && id) {
      const getToDoAsync = async () => {
        try {
          const { author, note, title } = await apiClient.getToDo(id);
          setAuthor(author);
          setNote(note);
          setTitle(title);
          setIsError(false);
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
      };
      getToDoAsync();
    }
  }, [id, isAddForm]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await getApiPromiseForSubmit();
      console.log(data);
      handleGoBack();
    } catch (error) {
      setIsError(true);
    }
  };
  return (
    <div>
      <p>{isAddForm ? 'Dodawanie' : 'Edycja'} zadania</p>
      <form className="todo-form" onSubmit={handleSubmit}>
        <Label htmlFor="title">Tytuł</Label>
        <Input
          onChange={(element) => setTitle(element.target.value)}
          id="title"
          value={title}
          placeholder="Kupić parasol na balkon"
        />
        {isAddForm && (
          <>
            <Label htmlFor="author">Autor</Label>
            <Input
              onChange={(element) => setAuthor(element.target.value)}
              id="author"
              value={author}
              placeholder="Wojtek"
            />
          </>
        )}
        <Label htmlFor="note">Treść</Label>
        <InputTextArea
          onChange={(element) => setNote(element.target.value)}
          id="note"
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
          value={note}
        />
        {isError && (
          <p className="todo-form__error">Wystąpił błąd, spróbuj ponownie.</p>
        )}
        <div className="todo-form__controls">
          <Button type="reset" onClick={handleGoBack} variant="secondary">
            Cofnij
          </Button>
          <Button type="submit">{isAddForm ? 'Dodaj' : 'Zapisz'}</Button>
        </div>
      </form>
    </div>
  );
}
