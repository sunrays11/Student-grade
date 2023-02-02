import React,{ lazy } from "react";
import { Routes, Route } from "react-router-dom"
import StudentLayout from "./studentLayout";
import Student  from './show/studentList'
import Create  from './studentForm';

export function StudentRoutes(){
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route index element={<Student />} />
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  )
}