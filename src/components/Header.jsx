import NewBudget from './NewBudget';

const Header = ({ budget, setBudget, validBudget, setValidBudget }) => {
  return (
    <header>
      <h1>Expense Planner</h1>
      {validBudget ? (
        <p>Budget Control</p>
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
