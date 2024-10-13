import React from "react";
import NoteList from "../NoteList";
import Header from "../Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex gap-8 p-8 items-start justify-between">
        {children}
        <NoteList />
      </div>
    </div>
  );
};

export default DashboardLayout;
