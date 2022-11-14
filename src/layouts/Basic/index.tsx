import React from "react";
import "./style.scss";

interface Props {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: Props) => {

  return (
    <div className="basic-layout">
      {children}
    </div>
  );
};
