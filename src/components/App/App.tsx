import Header from '../Header/Header';
import { Route, useLocation, Routes } from 'react-router';
import MainPage from '../../pages/MainPage';
import {MAIN_URL, DELIVERY_URL, CONTACTS_URL, GRIPSTER_URL, BASKET_URL, GRIPSTER_PRO_URL} from '../../utils/links'
import Footer from '../Footer/Footer';
import styles from '../App/App.module.scss';
import InfoPage from '../../pages/InfoPage';
import { infoConfig } from '../../utils/infoConfing';
import GripsterPage from '../../pages/GripsterPage';
import BasketPage from '../../pages/BasketPage/BasketPage';
import GripsterProPage from '../../pages/GripsterProPage';

export default function App() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <Header/>
      <Routes location={location}>
        <Route path={MAIN_URL} element={<MainPage/>} />
        <Route path={DELIVERY_URL} element={<InfoPage {...infoConfig.delivery} />} />
        <Route path={CONTACTS_URL} element={<InfoPage {...infoConfig.contacts}  />} />
        <Route path={GRIPSTER_URL} element={<GripsterPage />} />
        <Route path={GRIPSTER_PRO_URL} element={<GripsterProPage />} />
        <Route path={BASKET_URL} element={<BasketPage />} />
        <Route path='*' element={<MainPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
