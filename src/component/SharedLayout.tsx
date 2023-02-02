import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../component/Navigation/Navbar';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;