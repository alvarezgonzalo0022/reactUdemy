import { useForm } from "../hooks";

const TodoAdd = ({ handleFormSubmit }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onFormSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        handleFormSubmit(newTodo)

        onResetForm()
    }

  return (
    <form action="" onSubmit={(e) => onFormSubmit(e)}>
        <input 
            type="text"
            placeholder="Que hay que hacer?" 
            className="form-control"
            value={description}
            onChange={onInputChange}
            name="description"
        />
        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  )
}

export default TodoAdd