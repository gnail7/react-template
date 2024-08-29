import { ThemeProvider } from 'antd-style';
import { useSelector } from 'react-redux';
import getThemeByAppearance from './theme.js';
import { useEffect } from 'react';
import { Button } from 'antd';
import { toggleThemeMode } from '../store/feature/user.js';
const CustomThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state.user.themeMode);
  useEffect(() => {
    console.log(themeMode);
  }, [themeMode]);
  return <ThemeProvider themeMode={themeMode}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
