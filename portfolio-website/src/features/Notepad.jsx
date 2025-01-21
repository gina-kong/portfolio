import { Menu, Input } from "antd";
import Draggable from 'react-draggable';
import { useEffect, useRef, useState } from "react";

const { TextArea } = Input;
const rowSize = 28;
export const Notepad = () => {
  // findDomNode() is deprecated in Strict Mode - required by react-draggable
  const nodeRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [maxRows, setMaxRows] = useState(1)

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

  useEffect(() => {
    // Update window height
    const updateHeight = () => {
      if (nodeRef.current) {
        const height = nodeRef.current.offsetHeight;
        setWindowHeight(height);
        const rows = Math.floor(height / rowSize)
        setMaxRows(rows);
        console.log(`${height}px -> ${rows} rows`)
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    }
  })

  return (
    <Draggable bounds=".boundary" nodeRef={nodeRef} handle=".draggableHeader">
      <div className="window" ref={nodeRef}>
        <header>
          <div className="trafficLights">
            <span className="dot close"></span>
            <span className="dot minimise"></span>
            <span className="dot maximise"></span>
          </div>
          <div className="draggableHeader" />
        </header>
        <Menu mode="horizontal" items={items} />
        <TextArea placeholder="Enter Text Here" autoSize={{ maxRows: maxRows }} style={{"border": "none", "backgroundColor": "#cecece"}}/>
      </div>
    </Draggable>
  )
}

