import './App.css'
import { Dock } from './features/Dock'
import { Notepad } from './features/Notepad'

function App() {

  return (
    <>
      <div className="boundary">
        <Notepad />
        <Dock />
      </div>
    </>
  )
}

export default App
