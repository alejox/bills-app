import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setValidBudget }) => {

  const [message, setMessage] = useState('');


  const handleBudget = e => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage('No es un presupuesto valido');

      return
    }
    setMessage('');
    setValidBudget(true)
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handleBudget} className='formulario'>
        <div className='campo'>
          <label htmlFor=''>Define Budget</label>

          <input
            type='number'
            className='nuevo-presupuesto'
            placeholder='Add your budget'
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />
        </div>

        <input type='submit' value='Add' />

        {message && <Message tipo='error'>{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
