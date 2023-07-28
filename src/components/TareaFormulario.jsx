import React, {useState} from 'react'
import '../styles/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
   
    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    };

    const manejarEnvio = e =>{
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };

        props.onSubmit(tareaNueva)
    };

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
        <input 
            onChange={manejarCambio}
            className='tarea-input'
            type='texto'
            placeholder='Escribe una tarea'
            name='texto'
        />
        <button className='tarea-boton'>
            Agrear tarea
        </button>
    </form>
  )
}

export default TareaFormulario