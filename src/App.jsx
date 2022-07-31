import { useState } from "react"
import Header from "./components/Header"


function App() {

  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);

  return (
    <>
    <Header
    budget={budget}
    setBudget={setBudget}
    ValidBudget={validBudget}
    setValidBudget={setValidBudget}
    />
    
    </>
  )
}

export default App
