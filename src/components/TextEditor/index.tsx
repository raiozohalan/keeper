import classNames from "@/helpers/classNames";
import React from "react";

const TextEditor = () => {
  return (
    <div
      className={classNames(
        "flex-1 h-[calc(100vh-120px)] sticky top-[88px]",
        "bg-slate-500"
      )}
    >
      TextEditor
    </div>
  );
};

export default TextEditor;
