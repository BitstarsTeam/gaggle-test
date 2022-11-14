import { useState } from "react";
import Divider from "@mui/material/Divider";
import "./style.scss";

export const TableHeader = ({}) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="table-header">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="table-header-date">Date</span>
      <Divider
        orientation="vertical"
        sx={{ width: "1px", height: "25px", backgroundColor: "grey" }}
      />
      <span className="table-header-tag">Incident Type</span>
      <Divider
        orientation="vertical"
        sx={{ width: "1px", height: "25px", backgroundColor: "grey" }}
      />
      <span className="table-header-tag">Status</span>
    </div>
  );
};
