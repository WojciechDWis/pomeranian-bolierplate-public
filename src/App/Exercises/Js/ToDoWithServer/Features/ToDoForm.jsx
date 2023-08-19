import { useState } from 'react';
import { Button, Label, Input, InputTextArea } from '../Components';
import './styles.css';

export function ToDoForm() {
  const [isError, setIsError] = useState;
  const handleAdd = (event) => {
    event.preventDefault();
    const success = Math.random() > 0.5;
    if (success) {
      handleGoBack(false);
    } else {
      setIsError(true);
    }
  };
  const handleGoBack = () => {};
  return (
    <div>
      <p>Dodawanie zadania</p>
      <form className="todo-form">
        <Label htmlFor="title">Tytuł</Label>
        <Input id="title" placeholder="Kupić parasol na balkon" />
        <Label htmlFor="author">Autor</Label>
        <Input id="author" placeholder="Wojtek" />
        <Label htmlFor="note">Treść</Label>
        <InputTextArea
          id="note"
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
        />
        {isError && (
          <p className="todo-form__error">Wystąpił błąd, spróbuj ponownie.</p>
        )}
        <div className="todo-form__controls">
          <Button type="reset" onClick={handleGoBack} variant="secondary">
            Cofnij
          </Button>
          <Button type="submit" onClick={handleAdd}>
            Dodaj
          </Button>
        </div>
      </form>
    </div>
  );
}
