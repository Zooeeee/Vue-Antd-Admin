import Vue from 'vue'
// import portal from 'ant-design-vue/es/_util/Portal'
// import portalDirective from 'ant-design-vue/es/_util/portalDirective'
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
  InputNumber,
  Tag,
  PageHeader,
  BackTop,
  Drawer,
  Modal,
  Badge
} from 'ant-design-vue'
// ant-design的按需引入-end
// 按需引入ant-design
export const andtImport = () => {
  // Vue.use(portalDirective, { name: 'portal' })
  // Vue.use(portal, { name: 'portal' })
  Vue.component(Avatar.name, Avatar)
  Vue.component(Modal.name, Modal)
  Vue.component(Skeleton.name, Skeleton)
  Vue.component(Card.name, Card)
  Vue.component(PageHeader.name, PageHeader)
  Vue.component(Card.Meta.name, Card.Meta)
  Vue.component(Result.name, Result)
  Vue.component(Pagination.name, Pagination)
  Vue.component(Table.name, Table)
  Vue.component(Empty.name, Empty)
  Vue.component(BackTop.name, BackTop)
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
  Vue.component(Drawer.name, Drawer)
  Vue.component(Form.Item.name, Form.Item)
  Vue.component(Tabs.name, Tabs)
  Vue.component(Tabs.TabPane.name, Tabs.TabPane)
  Vue.component(Icon.name, Icon)
  Vue.component(Row.name, Row)
  Vue.component(Input.TextArea.name, Input.TextArea)
  Vue.component(Input.Search.name, Input.Search)
  Vue.component(InputNumber.name, InputNumber)
  Vue.component(Col.name, Col)
  Vue.component(Popconfirm.name, Popconfirm)
  // Vue.component(Modal.confirm.name, Modal.confirm)
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
  Vue.component(Tag.name, Tag)
  Vue.component(Badge.name, Badge)
  Vue.prototype.$message = message
  Vue.prototype.$confirm = Modal.confirm
}
// 按需引入ant-design-end
