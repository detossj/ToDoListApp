import { useTodo } from './hooks/useTodo'
import { ToDoList } from './components/ToDoList'
import { TodoAdd } from './components/TodoAdd'


export const ToDoListApp = () => {
    
    const {todos, handleOnNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo();

    return (
      <div className="App">
          <h1>Tareas</h1>


          <div className="TodoList">
            <ToDoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo }></ToDoList>
          </div>
            
          <div className="TodoAdd">
            <h4>Agregar Tarea</h4>
            <TodoAdd onNewTodo={ handleOnNewTodo }></TodoAdd>
          </div>

      </div>
    )
}
