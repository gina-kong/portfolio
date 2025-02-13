import { useRef } from 'react'
import about from '../../assets/about.png'
import contact from '../../assets/contact.png'
import photos from '../../assets/photos.png'
import projects from '../../assets/projects.png'
import notes from '../../assets/notes.png'
import paint from '../../assets/paint.png'
import { scaleValue } from '../../utils/scale';
import "./dock.css"
import { useVisibility } from '../../context/VisibilityContext'

const maxAdditionalSize = 5;

const Dock = () => {
  const dockRef = useRef(null);
  const { openComponent, focusComponent, getZIndex } = useVisibility();

  const handleAppHover = (ev) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };

  return (
    <div className="page">
      <div className="container" style={{"zIndex": getZIndex("Dock")}}>
        <nav ref={dockRef} className="dock">
          <ul onMouseEnter={() => focusComponent("Dock")}>
            <li className="app" onMouseMove={handleAppHover} onClick={() => openComponent("Explorer")}>
                <img src={about} className="logo" alt="about logo" />
                <span className="tooltip">About Me</span>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
                <img src={contact} className="logo" alt="contact logo" />
                <span className="tooltip">Contact</span>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
                <img src={photos} className="logo" alt="photos logo" />
                <span className="tooltip">Gallery</span>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
                <img src={projects} className="logo" alt="projects logo" />
                <span className="tooltip">Projects</span>
            </li>
            <li className="app" onMouseMove={handleAppHover} onClick={() => openComponent("Notepad")}>
                <img src={notes} className="logo" alt="notepad logo" />
                <span className="tooltip">Notepad</span>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
                <img src={paint} className="logo" alt="paint logo" />
                <span className="tooltip">Paint</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Dock;