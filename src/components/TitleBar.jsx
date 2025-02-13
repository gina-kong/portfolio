import close from "../assets/close-icon.svg"
import minimise from "../assets/minimise-icon.svg"
import maximise from "../assets/maximise-icon.svg"
import "./titlebar.css"
import { useVisibility } from "../context/VisibilityContext"

const TitleBar = ({ title, appName }) => {

  const { closeComponent } = useVisibility();

  const handleClose = () => {
    closeComponent(appName);
  }

  const handleMinimise = () => {
    alert('MINIMISE')
  }

  const handleMaximise = () => {
    alert('MAXIMISE')
  }

  return (
    <header>
      <div className="trafficLights">
        <span className="dot close" onClick={handleClose}>
          <img className="trafficLightsIcons closeIcon" src={close}/>
        </span>
        <span className="dot minimise" onClick={handleMinimise}>
          <img className="trafficLightsIcons minimiseIcon" src={minimise}/>
        </span>
        <span className="dot maximise" onClick={handleMaximise}>
          <img className="trafficLightsIcons maximiseIcon" src={maximise}/>
        </span>
      </div>
      <div className="draggableHeader">
        <p>{title} - {appName}</p>
      </div>
    </header>
  )
}

export default TitleBar;