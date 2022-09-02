import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const StoryBook = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
