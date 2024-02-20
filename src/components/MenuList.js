import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  BarsOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/sidebar/homepage">Home</Link>
      </Menu.Item>
      <Menu.Item key="Bikess" icon={<AppstoreOutlined />}>
        Bikess
      </Menu.Item>

      <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Tasks">
        <MenuItem key="task-1">task 1</MenuItem>
        <MenuItem key="task-2">task 2</MenuItem>
        <Menu.SubMenu key="subtasks" title="Subtasks">
          <Menu.Item key="subtask-1">Subtask 1</Menu.Item>
          <Menu.Item key="subtask-2">Subtask 2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>

      <Menu.Item key="Progress" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      <Menu.Item key="Payment" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key="Setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
