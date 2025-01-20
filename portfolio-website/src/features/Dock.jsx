import { useRef } from 'react'
import about from '../assets/about.png'
import contact from '../assets/contact.png'
import photos from '../assets/photos.png'
import projects from '../assets/projects.png'
import notes from '../assets/notes.png'
import paint from '../assets/paint.png'
import { scaleValue } from '../utils/scale';

const maxAdditionalSize = 5;

export const Dock = () => {
  const dockRef = useRef(null);

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
      <div className="container">
        <nav ref={dockRef} className="dock">
          <ul>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src={about} className="logo" alt="about logo" />
                <span className="tooltip">About Me</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src={contact} className="logo" alt="contact logo" />
                <span className="tooltip">Contact</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src={photos} className="logo" alt="photos logo" />
                <span className="tooltip">Gallery</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src={projects} className="logo" alt="projects logo" />
                <span className="tooltip">Projects</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src={notes} className="logo" alt="notepad logo" />
                <span className="tooltip">Notepad</span>
              </a>
            </li>
            <li className="app" onMouseMove={handleAppHover}>
              <a href="#" target="_blank">
                <img src={paint} className="logo" alt="paint logo" />
                <span className="tooltip">Paint</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
