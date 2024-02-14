import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {

    // Contexto
    const { toggleModal, addTodo } = React.useContext(TodoContext);

    // Estado local
    const [newTodoValue, setNewTodoValue] = React.useState("");

    // Estado derivado local
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    // Eventos de botones
    const onCancel = () => {
        toggleModal()
    }

    const onSumbit = () => {
        toggleModal()
        addTodo(newTodoValue)
    }

    return (
        <div className="modalBackground">
            <section className="modalContainer">

                <span className="modalTitle">Crea un nuevo <span className="green">TODO</span></span>

                <textarea
                placeholder='Comer Kebabs'
                value={newTodoValue}
                onChange={onChange}
                ></textarea>

                <div className="modalButtons">
                    <button
                    className="modalButton modalButton-cancel"
                    onClick={() => {
                        onCancel()
                    }}
                    >Cancelar</button>
                    <button
                    className="modalButton modalButton-add"
                    onClick={() => {
                        onSumbit()
                    }}
                    >Crear</button>
                </div>

            </section>
        </div>
    )
}

export { TodoForm };