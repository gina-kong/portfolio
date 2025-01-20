import { Menu } from "antd";
import Draggable from 'react-draggable';

export const Notepad = () => {

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

  const onClick = (e) => {
    console.log('click', e);
  }

  return (
    <Draggable handle="header">
      <div className="window">
        <header>
          <span className="dot close"></span>
          <span className="dot minimise"></span>
          <span className="dot maximise"></span>
        </header>
        <Menu onClick={onClick} mode="horizontal" items={items} />
      </div>
    </Draggable>
  )
}

