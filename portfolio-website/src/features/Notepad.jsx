import { Menu, Input } from "antd";
import { Rnd } from "react-rnd"
import { useEffect, useRef, useState } from "react";
import close from "../assets/close-icon.svg"
import minimise from "../assets/minimise-icon.svg"
import maximise from "../assets/maximise-icon.svg"

const { TextArea } = Input;
const rowSize = 22.5;
const headerOffset = 30 + 46;

export const Notepad = () => {
  const nodeRef = useRef(null)
  const [maxRows, setMaxRows] = useState(1)
  const initialWidth = 560;
  const initialHeight = 480;

  const centerX = (window.innerWidth - initialWidth) / 2;
  const centerY = (window.innerHeight - initialHeight) / 2;

  const [title, setTitle] = useState("Untitled")
  
  const items = [
    {
      key: 'sub1',
      label: 'File',
      children: [
        {
          key: '1-1',
          label: 'New',
        },
        {
          key: '1-2',
          label: 'Save',
        },
        {
          key: '1-3',
          label: 'Save As...',
        },
        {
          key: '1-4',
          label: 'Open...',
        },
        {
          key: '1-5',
          label: 'Print',
        },
      ]
    },
    {
      key: 'sub2',
      label: 'Edit',
      children: [
        {
          key: '2-1',
          label: 'Undo',
        },
        {
          key: '2-2',
          label: 'Redo',
        },
        {
          type: 'divider',
        },
        {
          key: '2-3',
          label: 'Cut',
        },
        {
          key: '2-4',
          label: 'Copy',
        },
        {
          key: '2-5',
          label: 'Paste',
        },
        {
          type: 'divider',
        },
        {
          key: '2-6',
          label: 'Select all',
        },
        {
          type: 'divider',
        },
        {
          key: '2-7',
          label: 'Find and replace',
        },
      ]
    },
    {
      key: 'sub3',
      label: 'Format',
      children: [
        {
          key: '3-1',
          label: 'Font...',
        }
      ]
    },
    {
      key: 'sub4',
      label: 'View',
      children: [
        {
          key: '4-1',
          label: 'Zoom in',
        },
        {
          key: '4-2',
          label: 'Zoom out',
        },
      ]
    },
    {
      key: 'sub5',
      label: 'Help',
      children: [
        {
          key: '5-1',
          label: 'Tutorial',
        }
      ]
    },
  ]

  // Function to update maxRows based on height
  const updateMaxRows = (height) => {
    const rows = Math.floor((height - headerOffset) / rowSize);
    setMaxRows(rows);
    // console.log(`${height}px -> ${rows} rows`);
  };
  
  // Update window height
  useEffect(() => {
    if (nodeRef.current) {
      const height = nodeRef.current.offsetHeight;
      updateMaxRows(height);
    }
  }, []);

  const handleResizeStop = () => {
    if (nodeRef.current) {
      const height = nodeRef.current.offsetHeight;
      updateMaxRows(height);
    }
  };

  const handleClose = () => {
    alert('CLOSE')
  }

  const handleMinimise = () => {
    alert('MINIMISE')
  }

  const handleMaximise = () => {
    alert('MAXIMISE')
  }
  
  
  return (
    <Rnd
    default={{
        x: centerX,
        y: centerY,
        width: initialWidth,
        height: initialHeight,
      }}
      minWidth={initialWidth}
      minHeight={initialHeight}
      bounds="body"
      dragHandleClassName="draggableHeader"
      resizeHandleClasses={{
        topLeft: 'topLeft',
        topRight: 'topRight',
        bottomLeft: 'bottomLeft',
        bottomRight: 'bottomRight',
      }}
      style={{
        "backgroundColor": "white",
        "borderRadius": "12px",
        "boxShadow": "0px 0px 15px -2px rgba(0, 0, 0, 0.25)",
      }}
      onResizeStop={handleResizeStop}
    >
      <div ref={nodeRef} className="window" style={{"height": "100%", "width": "100%"}}>
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
            <p>{title} - Notepad</p>
          </div>
        </header>
        <Menu mode="horizontal" items={items} />
        <TextArea placeholder="Text Here" autoSize={{ maxRows: maxRows }} style={{"border": "none", "backgroundColor": "#cecece"}}/>
      </div>
    </Rnd>
  )
}

