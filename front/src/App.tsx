import './App.css'
import Presentation from './components/presentation'
import Heart from './components/heart'
import Lungs from './components/lungs'
import Skin from './components/skin'
import Blood from './components/blood'
import Bones from './components/bones'
import QuizzComponent from "./components/quizz.tsx";

function App() {

  return (
    <>
      <Presentation />
      <Heart />
      <Lungs />
      <Skin />
      <Blood />
      <Bones />
        <QuizzComponent />
    </>
  )
} 

export default App;
