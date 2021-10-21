# routes.ts

- 用于合并并且导出路由数组,这里可以配置登录和未登录状态的路由;或者配置模块的路由

# constant.ts

- 用于路由跳转 path 配置和页面名字配置

# 思考

- 后期多语言可以把所有的文案再放入一个统一的文件夹中进行配置


## react-router-dom中常用API
* BrowserRouter,H5路由
* Switch,自动匹配一个优先级高的路由
* Link,节省代码,并且用户右击可以查看超链接
* withRouter可以拿到history,params等参数
* useHistory、useParams等Hooks组件可以代码量少的情况下获取需要的参数