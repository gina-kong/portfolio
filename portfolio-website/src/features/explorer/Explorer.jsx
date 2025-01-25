import TitleBar from "../../components/Titlebar";
import { Rnd } from "react-rnd";
import { ConfigProvider, Layout, Menu, Table } from "antd";
const { Header, Content, Sider } = Layout;
import { IoMdWifi } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
import { BsWindowDesktop } from "react-icons/bs";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Explorer = () => {
  const initialWidth = 900;
  const initialHeight = 520;
  const centerX = (window.innerWidth - initialWidth) / 2;
  const centerY = (window.innerHeight - initialHeight) / 2;

  const title = "Desktop"

  const items1 = [
    {
      key: "sub1",
      label: "File",
      children: [
        {
          key: "1-1",
          label: "New",
        }
      ]
    },
    {
      key: "sub2",
      label: "View",
      children: [
        {
          key: "2-1",
          label: "List",
        }
      ]
    },
    {
      key: "sub3",
      label: "Help",
      children: [
        {
          key: "3-1",
          label: "Tutorial",
        }
      ]
    }
  ]

  const items2 = [
    {
      key: "sub1",
      icon: <IoMdWifi />,
      label: "AirDrop",
    },
    {
      key: "sub2",
      icon: <BsWindowDesktop />,
      label: "Desktop",
    },
    {
      key: "sub3",
      icon: <IoDocumentOutline />,
      label: "Documents",
    },
    {
      key: "sub4",
      icon: <MdOutlineDownloadForOffline />,
      label: "Downloads",
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Date Modified',
      dataIndex: 'dateModified',
      key: 'dateModified',
      responsive: ['md'],
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      responsive: ['lg'],
    },
    {
      title: 'Kind',
      dataIndex: 'kind',
      key: 'kind',
      responsive: ['lg'],
    },
  ];

  const data = [
    {
      key: '1',
      name: 'about-me.pdf',
      dateModified: '6 Nov 2024 at 6:44 PM',
      size: '171 KB',
      kind: 'Adobe PDF Document'
    },
    {
      key: '2',
      name: 'image1.jpeg',
      dateModified: '6 Nov 2024 at 6:44 PM',
      size: '1.2 MB',
      kind: 'JPEG image'
    },
    {
      key: '3',
      name: 'Screenshot at Feb 14 12-18-47.png',
      dateModified: '6 Nov 2024 at 6:44 PM',
      size: '443 KB',
      kind: 'PNG image'
    },
  ];

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
    >
      {/* <div className="window" style={{"height": "100%", "width": "100%"}}> */}
        <TitleBar title={title} appName=""/>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerHeight: "48px"
            }
          }
        }}
      >
        <Layout>
          <Header style={{ padding: "0" }}>
            <Menu
              mode="horizontal"
              items={items1}
              style={{
                width: "100%",
              }}
            />
          </Header>
          <Layout hasSider>
            <Sider
              width={200}
              style={{
                insetInlineStart: 0,
                backgroundColor: "red"
              }}
            >
              <Menu
                mode="inline"
                style={{
                  textAlign: "left",
                }}
                items={items2}
                />
            </Sider>
            <Layout>
              <Content>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
              </Content>
            </Layout>
          </Layout>
        </Layout>
    </ConfigProvider>
      {/* </div> */}
    </Rnd>
  )
}

export default Explorer;