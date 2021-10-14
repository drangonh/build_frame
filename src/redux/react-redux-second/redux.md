## 安装依赖

- yarn add react-redux
- yarn add @types/react-redux -D

## 在入口的 index.tsx 文件中配置 store

- 见该目录下的 index.tsx 文件代码
- 接下来我们需要按照 react-redux 的 API 修改 redux 的订阅和 dispatch 分发


## 安装redux-thank
* yarn add redux-thunk

## 配置redux-thunk
* 在store中配置redux-thunk
* redux-thunk主要的功能就是可以让我们dispatch一个函数，而不只是普通的dispatch一个action
* 所以一般的请求函数我们可以直接放在action中配置一个函数,通过redux-thunk让dispatch可以调用
* 例子见recommendProductsReducer.ts中
