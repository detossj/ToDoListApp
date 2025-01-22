import { useForm } from "../hooks/useForm"


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if (description.trim().length < 1) {
            return;  
        }

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();

    }

  return (
    <form onSubmit={ onFormSubmit }>
        <input 
            type="text"
            placeholder="Ingresa una tarea"
            name="description"
            value={description}
            onChange={onInputChange} />

        <button type="submit">Agregar</button>

    </form>
  )
}
