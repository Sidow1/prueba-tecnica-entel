import { Navigate, Route, Routes } from "react-router-dom";
import { FormPage, ListPage } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/form" element={<FormPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/*" element={<Navigate to="/form" />} />
      </Routes>
    </>
  );
};
