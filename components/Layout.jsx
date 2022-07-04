import React from 'react';
import { NavBar, Footer } from './';

function Layout({children}) {
  return (
    <div>
      <NavBar />
        {children}
      <Footer />
    </div>
  );
}

export default Layout;