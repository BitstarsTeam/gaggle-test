import React, { useState, useEffect, useRef } from "react";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { Form, Image } from "react-bootstrap";
import SaltireImg from "assets/icons/saltire.svg";
import AlertImg from "assets/icons/alert.svg";
import EyeClosedImg from "assets/icons/eye-closed.svg";
import EyeOpenImg from "assets/icons/eye-open.svg";
import "./style.scss";

type Props = {
  type: "text" | "password";
  label: string;
  value: string;
  submitted: boolean;
  updateValue: (val: string) => void;
};

export const FormInput: React.FC<Props> = ({
  type,
  label,
  value,
  submitted,
  updateValue,
}) => {
  const [inputVal, setInputVal] = useState<string>(value);
  const [eyeShow, setEyeShow] = useState<boolean>(true);
  const [inputType, setInputType] = useState<string>(type);
  const [submitClick, setSubmitClick] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    setSubmitClick(submitted);
  }, [submitted]);

  const onInputClick = () => {
    setClicked(true);
  };

  const onInputChange = (val) => {
    setInputVal(val);
    updateValue(val);
    setClicked(false);
  };

  const onEyeClick = () => {
    setEyeShow(!eyeShow);
    setInputType(inputType == "password" ? "text" : "password");
  };

  return (
    <Card className="form-input-container">
      <div className="form-input-row">
        <span className="form-input-label">{label}</span>
        {label == "Password" && (
          <div onClick={() => onEyeClick()}>
            <Image
              src={eyeShow ? EyeOpenImg : EyeClosedImg}
              className="form-input-eye"
              onClick={() => {}}
            />
            <span className="form-input-label">
              {eyeShow ? "Show" : "Hide"}
            </span>
          </div>
        )}
      </div>
      <div className="form-input-row">
        {/* alert icon */}
        {submitClick && inputVal == "" && (
          <Image
            src={AlertImg}
            className="form-input-alert"
          />
        )}
        <input
          type={inputType}
          value={inputVal}
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
          onClick={() => {
            onInputClick();
          }}
          onBlur={() => setClicked(false)}
        ></input>
        {inputVal != "" && (
          <Image
            src={SaltireImg}
            className="form-input-eye"
						onClick={() => {
							setInputVal("");
							updateValue("");
						}}
          />
        )}
      </div>
      {clicked && (!submitClick || (submitClick && inputVal != "")) && (
        <Divider className="form-input-divider" />
      )}
      {/* alert text */}
      {submitClick && inputVal == "" && (
        <span className="form-input-alert-text">No value provided.</span>
      )}
      {clicked && submitClick && inputVal == "" && (
        <Divider className="form-input-divider" />
      )}
    </Card>
  );
};
