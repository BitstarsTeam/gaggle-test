import { FaTh } from "react-icons/fa";
import LogoImg from "assets/icons/logo.svg";
import AlertImg from "assets/icons/alert.svg";
import Divider from "@mui/material/Divider";
import { Spinner } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./style.scss";

export const Header = ({}) => {
  return (
    <div className="header">
      <FaTh
        style={{
          marginLeft: "10px",
          width: "2.92rem",
          height: "2.92rem",
          color: "#C5C5C5",
        }}
      />
      <Image src={LogoImg} className="login-logo" />
      <div className="header-spinner">
        <Image src={AlertImg} className="form-input-alert" />
        <span>Save unsuccessful.</span>
        <Divider
          orientation="vertical"
          sx={{
            width: "1px",
            height: "15px",
            margin: "0px 10px",
            backgroundColor: "grey",
          }}
        />
        <Spinner animation="border" variant="primary" size="sm" />
        <span style={{ marginLeft: "5px" }}>Retrying...</span>
      </div>
    </div>
  );
};
