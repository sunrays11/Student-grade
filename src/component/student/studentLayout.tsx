import React from "react";
import { Outlet } from 'react-router-dom';
import StudentNav from '../../component/Navigation/StudentNav';
const studentLayout = () => {
  return (
    <>
      <StudentNav />
      <Outlet />
    </>
  );
};
export default studentLayout;