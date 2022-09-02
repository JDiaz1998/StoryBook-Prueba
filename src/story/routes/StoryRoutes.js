import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StoryPage } from "../pages/StoryPage";

export const StoryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StoryPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
