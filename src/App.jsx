import './App.css'
import Dock from './features/dock/Dock'
import Notepad from './features/notepad/Notepad'
import Explorer from './features/explorer/Explorer'

function App() {

  return (
    <>
      <Notepad />
      <Dock />
      <Explorer />
    </>
  )
}

export default App
