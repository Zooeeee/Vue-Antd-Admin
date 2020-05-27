import Vue from 'vue'
// ant-design的按需引入
import {
  Button,
  Layout,
  Icon,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Row,
  Col,
  FormModel,
  Spin,
  Tabs,
  message,
  Avatar,
  Dropdown,
  Tooltip,
  Skeleton,
  Descriptions,
  Table,
  Popconfirm,
  Empty,
  Card,
  Result,
  Pagination,
  Divider,
  InputNumber
} from 'ant-design-vue'

// ant-design的按需引入-end
// 按需引入ant-design
export const andtImport = () => {
  Vue.component(Avatar.name, Avatar)
  Vue.component(Skeleton.name, Skeleton)
  Vue.component(Card.name, Card)
  Vue.component(Card.Meta.name, Card.Meta)
  Vue.component(Result.name, Result)
  Vue.component(Pagination.name, Pagination)
  Vue.component(Table.name, Table)
  Vue.component(Empty.name, Empty)
  Vue.component(Popconfirm.name, Popconfirm)
  Vue.component(Divider.name, Divider)
  Vue.component(Descriptions.name, Descriptions)
  Vue.component(Descriptions.Item.name, Descriptions.Item)
  Vue.component(Tooltip.name, Tooltip)
  Vue.component(Menu.Divider.name, Menu.Divider)
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(Button.name, Button)
  Vue.component(Layout.name, Layout)
  Vue.component(Spin.name, Spin)
  Vue.component(Form.Item.name, Form.Item)
  Vue.component(Tabs.name, Tabs)
  Vue.component(Tabs.TabPane.name, Tabs.TabPane)
  Vue.component(Icon.name, Icon)
  Vue.component(Row.name, Row)
  Vue.component(Input.TextArea.name, Input.TextArea)
  Vue.component(Input.Search.name, Input.Search)
  Vue.component(InputNumber.name, InputNumber)
  Vue.component(Col.name, Col)
  Vue.component(FormModel.name, FormModel)
  Vue.component(FormModel.Item.name, FormModel.Item)
  Vue.component(Menu.name, Menu)
  Vue.component(Form.name, Form)
  Vue.component(Input.name, Input)
  Vue.component(Menu.SubMenu.name, Menu.SubMenu)
  Vue.component(Menu.Item.name, Menu.Item)
  Vue.component(Breadcrumb.name, Breadcrumb)
  Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
  Vue.component(Layout.Header.name, Layout.Header)
  Vue.component(Layout.Footer.name, Layout.Footer)
  Vue.component(Layout.Sider.name, Layout.Sider)
  Vue.component(Layout.Content.name, Layout.Content)
  Vue.prototype.$message = message
}
// 按需引入ant-design-end
