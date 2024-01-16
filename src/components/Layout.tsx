import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';

type ILayout = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout:React.FC<ILayout> = ({theme, setTheme}) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme}/>
      <Outlet />
      <Footer theme={theme} />
    </>
  );
};

export {Layout};