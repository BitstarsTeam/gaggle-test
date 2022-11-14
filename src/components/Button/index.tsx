import React from "react";
import "./style.scss";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button type="submit" className="form-button">
      <span>{children}</span>
    </button>
  );
};
