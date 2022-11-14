import { Tool } from "components";
import { FaSearch, FaFilter, FaFileDownload } from "react-icons/fa";
import "./style.scss";

export const Toolbar = ({}) => {
  return (
    <div className="toolbar">
      <Tool title="Button 1">
        <FaSearch style={{ width: "14px", height: "14px", color: "#4B4B4B" }} />
      </Tool>
      <Tool title="Button 2">
        <FaSearch style={{ width: "14px", height: "14px", color: "#4B4B4B" }} />
      </Tool>
      <Tool title="Button 3">
        <FaSearch style={{ width: "14px", height: "14px", color: "#4B4B4B" }} />
      </Tool>
      <Tool title="Filter by Keyword">
        <FaFilter style={{ width: "14px", height: "14px", color: "#4B4B4B" }} />
        <span className="toolbar-find">Find...</span>
      </Tool>
      <Tool title="Export">
        <FaFileDownload
          style={{ width: "14px", height: "14px", color: "#4B4B4B" }}
        />
      </Tool>
    </div>
  );
};
