import React from "react";
import Card from "@mui/material/Card";
import { FaSearch, FaAngleRight } from "react-icons/fa";
import "./style.scss";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Tool: React.FC<Props> = ({ title, children }) => {
  const isFilter = title == "Filter by Keyword";

  return (
    <div className="tool" style={{ marginLeft: isFilter ? "auto" : "0px" }}>
      <Card
        sx={{
          width: isFilter ? "238px" : "48px",
          height: "24px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
        {!isFilter && (
          <FaAngleRight
            style={{
              width: "12px",
              height: "12px",
              color: "#4B4B4B",
              marginLeft: "3px",
            }}
          />
        )}
      </Card>
      <span className="tool-title">{title}</span>
    </div>
  );
};
