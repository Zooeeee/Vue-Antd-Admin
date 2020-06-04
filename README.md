# 运行方式
```
# 克隆到本地
git clone 
# 限于家里的宽带,自己开发时用的都是cnpm
npm i
# 启动项目
npm run serve
```
# 地址
## 项目地址
## 线上展示地址
# 简介
## 起因
在掘金上看见一篇手写vue-admin的文章,感觉能锻炼自己的vue使用能力和检验vue的学习成果,于是决定跟着文章尝试,文章选用的是element-ui框架,为了掌握更多的ui框架,我选用了ant-design的vue版本

## 特色
 1. 根据登录获得的token进行路由控制,和侧边栏导航的渲染
 2. 封装了常见的指令和过滤器(在工具分类可以预览)
 3.  封装了一些常用的组件
	 1. 大数据表格(支持十万条数据的流畅渲染)
	 2. 富文本编辑器
	 3. 拖拽列表

## 还待完善的地方
1. 侧边栏的渲染和路由使用的是两套配置文件,每次修改需要修改两处,需要合并成一套配置文件
2. 侧边栏的渲染暂时只支持展开菜单,对于单个菜单的支持需要进一步的重构
3. 对于更换系统主题配色的需求
# 目录结构
*  doc  | 插件的文档放置目录
*   public | 项目根文件
*   src |  源码,主要工作空间
	* api |  封装数据交互函数
	* assets |  静态文件(js,css等)
	* components |  组件
	* config |  一些组件和插件的配置文件
	* directive |  vue指令
	* filters  | vue-filter
	* layout  | 布局文件
	* mock |  数据模拟
	* router |  路由文件
	* store  | vuex状态管理
	* utils  | 工具类
	* views  | 视图
*  static  | 静态资源目录(图片等)
*  tests  | 单元测试目录


# 重要文件说明
* src/config
	* antd.config.js | ant-design的按需引入文件
	* eCharts.config.js | echart的按需引入文件
	* route.config | 路由配置文件
	* siderBarList.config 侧边导航栏配置文件
* src/utils
	* request.js | 封装了axios请求(url,超时时间,添加token)
* src/main.js | 插件,自定义模块的引入

# 参考地址
[vue-admin手写文章](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
[vue-admin线上展示地址](https://panjiachen.github.io/vue-element-admin)
[ant-design-vue](https://www.antdv.com/components/layout-cn/#components-layout-demo-responsive)
[echarts](https://echarts.apache.org/examples/zh/index.html)
[layui-admin](https://www.layui.com/admin/std/dist/views/)
