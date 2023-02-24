import React from 'react';
import Header from './Header';

const LayoutDefault = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

export default LayoutDefault;  