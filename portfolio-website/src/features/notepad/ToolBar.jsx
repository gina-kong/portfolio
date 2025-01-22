import { Menu } from "antd";

const ToolBar = () => {
  const items = [
    {
      key: 'sub1',
      label: 'File',
      children: [
        {
          key: '1-1',
          label: 'New',
          onClick: () => {
            alert("NEW");
          },
        },
        {
          key: '1-2',
          label: 'Save',
          onClick: () => {
            alert("SAVE");
          },
        },
        {
          key: '1-3',
          label: 'Save As...',
          onClick: () => {
            alert("SAVE AS...");
          },
        },
        {
          key: '1-4',
          label: 'Open...',
          onClick: () => {
            alert("OPEN");
          },
        },
        {
          key: '1-5',
          label: 'Print',
          onClick: () => {
            alert("PRINT");
          },
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
          onClick: () => {
            alert("UNDO");
          },
        },
        {
          key: '2-2',
          label: 'Redo',
          onClick: () => {
            alert("REDO");
          },
        },
        {
          type: 'divider',
        },
        {
          key: '2-3',
          label: 'Cut',
          onClick: () => {
            alert("CUT");
          },
        },
        {
          key: '2-4',
          label: 'Copy',
          onClick: () => {
            alert("COPY");
          },
        },
        {
          key: '2-5',
          label: 'Paste',
          onClick: () => {
            alert("PASTE");
          },
        },
        {
          type: 'divider',
        },
        {
          key: '2-6',
          label: 'Select all',
          onClick: () => {
            alert("SELECT ALL");
          },
        },
        {
          type: 'divider',
        },
        {
          key: '2-7',
          label: 'Find and replace',
          onClick: () => {
            alert("FIND AND REPLACE");
          },
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
          onClick: () => {
            alert("FONT...");
          },
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
          onClick: () => {
            alert("ZOOM IN");
          },
        },
        {
          key: '4-2',
          label: 'Zoom out',
          onClick: () => {
            alert("ZOOM OUT");
          },
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
          onClick: () => {
            alert("TUTORIAL");
          },
        }
      ]
    },
  ]

  return (
    <Menu mode="horizontal" items={items} />
  )
}

export default ToolBar;