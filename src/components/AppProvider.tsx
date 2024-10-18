"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ThemeProvider } from "next-themes";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
