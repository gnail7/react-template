import {createStyles } from 'antd-style'

const useGlobalStyles = createStyles(({token, css}) => ({
  page: {
    background: token.colorBgContainer,
    width: '100%',
    height: '100%',
  },
  flexBox: {
    display: 'flex',
  },
  flexCenterBox: {
    display: 'flex',
    jusityfyContent: 'center',
    alignItems: 'center'
  },
  test: {
    background: 'pink',
    color: token.colorPrimary
  }
}))

export default useGlobalStyles
