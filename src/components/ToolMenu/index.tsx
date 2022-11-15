import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaFileDownload, FaAngleDown } from "react-icons/fa";
import "./style.scss";

type Props = {
  title: string;
};

export const ToolMenu: React.FC<Props> = ({ title }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="tool">
        <Card
          className={"tool-card"}
          sx={{ width: "4rem" }}
        >
					<Button
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<FaFileDownload className="toolbar-icon" />
          	<FaAngleDown className="toolbar-icon" />
					</Button>
        </Card>
        <span className="tool-title">{title}</span>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem className="tool-menu-item" onClick={handleClose}>CSV</MenuItem>
        <MenuItem className="tool-menu-item" onClick={handleClose}>PDF</MenuItem>
        <MenuItem className="tool-menu-item" onClick={handleClose}>XLS</MenuItem>
      </Menu>
    </div>
  );
};
