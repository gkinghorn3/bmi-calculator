import { useContext, useState } from 'react'

import { bmiContext } from './store/bmiContext'

import HeaderContainer from './Components/Header/Header.component'


function App() {

  const [bmi, setBmi] = useState(0);
  const [minIdealWeight, setMinIdealWeight] = useState(0);
  const [maxIdealWeight, setMaxIdealWeight] = useState(0);

 const bmiCtx = {
    bmiNumber: bmi,
    setBmi: setBmi,
    minIdealWeight: minIdealWeight,
    setMinIdealWeight: setMinIdealWeight,
    maxIdealWeight: maxIdealWeight,
    setMaxIdealWeight: setMaxIdealWeight,
 }

  return (
    <div className='app'>
      <bmiContext.Provider value={bmiCtx}>
        <HeaderContainer /> 
     
      </ bmiContext.Provider>
    </div>
  )
}

export default App
