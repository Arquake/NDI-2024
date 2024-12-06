import {GetMeteoApiCard} from './components/getMeteoApi';
import './App.css'
import Presentation from './components/presentation'
import Heart from './components/heart'
import Lungs from './components/lungs'

function App() {

  return (
    <>
      <Presentation />
      <GetMeteoApiCard city={'Paris'} />
      <Heart />
      <Lungs />
    </>
  )
}

export default App;
