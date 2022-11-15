import React, {useState} from "react";
import Card from "@mui/material/Card";
import { FaSearch, FaAngleRight, FaFilter } from "react-icons/fa";
import "./style.scss";

type Props = {
  title: string;
};

export const ToolButton: React.FC<Props> = ({ title }) => {
	const [clicked, setClicked] = useState<boolean>(false);
	const [hovered, setHovered] = useState<boolean>(false);
	const [keyword, setKeyword] = useState<string>("");
  const isFilter = title == "Filter by Keyword";

	const onInputChange = (val) => {
		setKeyword(val);
		if(val == "") {
			setClicked(false);
		}
		else {
			setClicked(true);			
		}
	}

  return (
    <div className="tool" onClick={ () => setClicked(true) } onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
      {!isFilter ?
				<Card className="tool-card" sx={{ width: clicked ? "8rem" : "4rem", backgroundColor: hovered? "#f4f4f4" : "#ffffff" }}>
					<FaSearch className="toolbar-icon" />
					{!clicked && <FaAngleRight className="toolbar-icon" />}
					{clicked && <input type="text" placeholder="Input text." value={keyword} onChange={(e) => onInputChange(e.target.value)} style={{backgroundColor: hovered? "#f4f4f4" : "#ffffff", width: "100%"}} />}
				</Card> :
				<Card className="tool-filter" sx={{ backgroundColor: hovered? "#f4f4f4" : "#ffffff" }}>
					<FaFilter className="toolbar-icon" />
					<input type="text" placeholder="Find..." value={keyword} onChange={(e) => onInputChange(e.target.value)} style={{backgroundColor: hovered? "#f4f4f4" : "#ffffff", width: clicked ? "100%" : "20%"}} />
				</Card>
			}
      <span className="tool-title">{title}</span>
    </div>
  );
};
