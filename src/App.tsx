import React,{ lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import { StudentRoutes } from './component/student/StudentRoutes';
import SharedLayout  from './component/SharedLayout';
const Error = lazy(() => import("./component/Error"));
const Know = lazy(() => import("./component/Know"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<Know />} />
        </Route>
          <Route path='/student/*' element={<StudentRoutes />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

