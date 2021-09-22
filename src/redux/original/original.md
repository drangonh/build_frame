# redux 原生的使用

- 继承 redux,并用 redux 原生自带的方法实现 redux 数据管理功能
- 只用 redux 插件即可实现数据管理功能

## 数据读取

```
    const storeState = store.getState();
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
    };
```

## 数据订阅

```
store.subscribe(this.handleStoreChange);

handleStoreChange = () => {
    const storeState = store.getState();
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList,
    });
};
```

## action 派发

```
const action = addLanguageActionCreator("新语言", "new_lang")
store.dispatch(action);
```

## 类型断言 as

- 当程序无法判断当前值的类型时,人为的指定类型
