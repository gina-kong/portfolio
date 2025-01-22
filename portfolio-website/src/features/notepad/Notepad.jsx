import { Input } from "antd";
import { Rnd } from "react-rnd"
import { useEffect, useRef, useState } from "react";
import ToolBar from "./ToolBar";
import TitleBar from "../../components/Titlebar";

const { TextArea } = Input;
const rowSize = 22.5;
const headerOffset = 30 + 46;

const Notepad = () => {
  const nodeRef = useRef(null)
  const [maxRows, setMaxRows] = useState(17)
  const initialWidth = 560;
  const initialHeight = 480;

  const centerX = (window.innerWidth - initialWidth) / 2;
  const centerY = (window.innerHeight - initialHeight) / 2;

  const [title, setTitle] = useState("Untitled")

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
        <TitleBar title={title} appName="Notepad"/>
        <ToolBar />
        <TextArea placeholder="Text Here" autoSize={{ minRows: 17, maxRows: maxRows }} style={{"border": "none", "backgroundColor": "#cecece"}}/>
      </div>
    </Rnd>
  )
}

export default Notepad;