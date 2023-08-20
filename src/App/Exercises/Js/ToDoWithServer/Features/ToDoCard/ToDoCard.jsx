import './styles.css';
import { MarkAsDoneIcon } from '../../Images/MarkAsDoneIcon';
import { DeleteIcon } from '../../Images/DeleteIcon';
import { formatDate } from '../../Utils/formatDate';
import { EditIcon } from '../../Images/EditIcon';

const ERROR_MESSAGE = 'nie udało się ukończyć';

export const ToDoCard = ({
  todo,
  handleMarkAsDone,
  handleDelete,
  isDeleteError,
  isMarkAsDoneError,
  handleEdit,
}) => {
  const { title, author, createdAt, note, doneDate, isDone } = todo;
  return (
    <div className={`todo-card ${isDone && 'todo-card__done'}`}>
      <div className="todo-card__details">
        <h2 className="todo-card__title">{title}</h2>
        <p className="todo-card__author">{author}</p>
        <p className="todo-card__createdAt">{formatDate(createdAt)}</p>
        <p className="todo-card__note">{note}</p>
      </div>
      <div className="todo-card__aside">
        <div className="todo-card__controls">
          {!isDone && (
            <MarkAsDoneIcon
              className={`todo-card__markAsDone ${
                isMarkAsDoneError && 'todo-card__markAsDoneError'
              }`}
              onClick={handleMarkAsDone}
            />
          )}

          <EditIcon onClick={handleEdit} />

          <DeleteIcon
            className={`todo-card__deleteIcon ${
              isDeleteError && 'todo-card__deleteError'
            }`}
            onClick={handleDelete}
          />
        </div>
        <div className="todo-card__message">
          {(isMarkAsDoneError || isDeleteError) && ERROR_MESSAGE}
        </div>
        <div className="todo-card__status">
          {isDone && (
            <>
              <MarkAsDoneIcon className="todo-card__markAsDoneIsDone" />
              <div className="todo-card__doneDate">{formatDate(doneDate)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
