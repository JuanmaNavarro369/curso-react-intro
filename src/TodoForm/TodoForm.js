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

    const isDisabled = newTodoValue.trim() === '';
    // isDisabled se leería de la siguiente forma: ¿Es el resultado de eliminar los espacios en blanco al principio y al final de newTodoValue igual a una cadena vacía? Si la respuesta es sí, significa que newTodoValue está vacío o solo contiene espacios en blanco, por tanto isDisabled es true. De lo contrario, si la respuesta es no, newTodoValue contiene algún texto, e isDisabled es false. Dado que el método de JavaScript trim() elimina los espacios de un string situados al inicio y al final.

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
                    disabled={isDisabled}
                    //Se deshabilita el botón si isDisabled es true
                    >Crear</button>
                </div>

            </section>
        </div>
    )
}

export { TodoForm };