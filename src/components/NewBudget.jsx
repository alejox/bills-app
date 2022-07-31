const NewBudget = ({budget, setBudget}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="">
            Define Budget
          </label>

          <input 
            type="text" 
            className="nuevo-presupuesto"
            placeholder="Add your budget"
            value={budget}
            onChange={e => setBudget(e.target.value)}
          />
        </div>


        <input 
        type="submit" 
        value="Add"
        />
      </form>
    </div>
  )
}

export default NewBudget