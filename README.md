# 主题系统

## 主题切换
`antd-style` 提供了`ThemeProvider`,这个组件可以方便地切换主题。通过 `ThemeProvider` 组件，可以设置主题色、字体大小、边框半径等样式属性。可以通过themeMode属性来切换主题模式，例如：'light'、'dark',`auto`等。

```jsx
import { ThemeProvider } from '@ant-design/use-token';

const MyComponent = () => {
  return (
    <ThemeProvider
      themeMode={'dark'}
      theme={{
        token: {
          colorPrimary: '#1DA57A',
          fontSizeBase: 16,
          borderRadius: 4,
        },
      }}
    >
      <div>
        This component will use the customized theme.
      </div>
    </ThemeProvider>
  );
};
```
如果你想要自定义各个主题的一些主题样式可以通过`theme`属性来设置，例如：
```jsx
const theme = {
  token: {
    colorPrimary: '#1DA57A',
    fontSizeBase: 16,
    borderRadius: 4,
  },
  components: {
    Button: {
      colorTextBgHover: 'red',
    },
  },
};
```


## 全局样式管理
使用`antd-style`以及光暗主题来控制
## 国际化
使用`i18next `.