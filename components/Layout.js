import { Fragment } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        margin: 0,
        padding: '60px 0 0 0',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        {children}
      </div>
    </>
  );
};

export default Layout;
