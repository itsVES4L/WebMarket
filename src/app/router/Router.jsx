import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, VerifyPage, StorePage, RegisterAndLoginPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<RegisterAndLoginPage />} />
      <Route path="/auth/verify" element={<VerifyPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;