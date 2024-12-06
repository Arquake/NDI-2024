import {GetMeteoApiCard} from './components/getMeteoApi';
import './App.css'
import Presentation from './components/presentation'
import Heart from './components/heart'
import Lungs from './components/lungs'
import QuizzComponent from "./components/quizz.tsx";

function App() {

  return (
    <>
      <Presentation />
      <GetMeteoApiCard city={'Paris'} />
      <Heart />
      <Lungs />
        <QuizzComponent />
    </>
  )
}

export default App;
