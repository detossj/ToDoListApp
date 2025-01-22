

export const ToDoItem = ( {todo, onDeleteTodo, onToggleTodo} ) => {
  return (

    <li>
      <input type="checkbox"  onClick={() => onToggleTodo( todo.id )}></input>
      <span className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}  >{ todo.description }</span>
      <button
        onClick={ () => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  )
}
