import React from 'react';
import Header from '../Header/Header';
import { Route, useLocation, Routes } from 'react-router';
import MainPage from '../../pages/MainPage';
import {MAIN_URL} from '../../utils/links'
import Footer from '../Footer/Footer';
import styles from '../App/App.module.scss';

export default function App() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <Header/>
      <Routes location={location}>
        <Route path={MAIN_URL} element={<MainPage/>} />
        <Route path='*' element={<MainPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
