import './App.css';
import useGlobalStyles from './assets/styles/global';
import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeMode, setThemeMode } from './store/feature/user';
import { Space } from 'antd';

function App() {
  const { styles } = useGlobalStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { themeMode } = useSelector((state) => state.user);
  const { t, i18n } = useTranslation();
  console.log('i18n '.i18n);
  const handleNavigate = () => {
    navigate({ pathname: '/home' });
  };

  const handleChangeTheme = () => {
    dispatch(toggleThemeMode());
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  const handleChangeLanguage = () => {
    const lng = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Space>
        <Button onClick={handleNavigate}>{t('routerSys')}</Button>
        <Button onClick={handleChangeTheme}>{t('themeSys')}</Button>
        <Button onClick={handleChangeLanguage}>{t('language')}</Button>
      </Space>

      <Card>
        <h1>{t('welcome')}</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </Card>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
