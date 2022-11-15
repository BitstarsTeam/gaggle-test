import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Form, Image } from "react-bootstrap";
import Divider from "@mui/material/Divider";
import ChickenImg from "assets/icons/chicken.png";
import { FormInput } from "components";
import "./style.scss";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const RegisterDialog: React.FC<Props> = ({ onClose, open }) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    if (name != "" && password != "" && email != "") {
      onClose();
    }
  };

  return (
    <Dialog onClose={() => onClose()} open={open}>
      <div className="dialog">
        <div className="dialog-logo d-none d-md-block">
          <Image src={ChickenImg} />
        </div>
        <Form className="dialog-form">
          <div className="dialog-title">
            <span>New Account</span>
          </div>
          <FormInput
            type="text"
            label="Username"
            value={name}
            submitted={submitted}
            updateValue={(val) => setName(val)}
          />
          <FormInput
            type="text"
            label="Password"
            value={password}
            submitted={submitted}
            updateValue={(val) => setPassword(val)}
          />
          <FormInput
            type="text"
            label="Email"
            value={email}
            submitted={submitted}
            updateValue={(val) => setEmail(val)}
          />
        </Form>
      </div>
      <Divider sx={{ width: "100%", height: "1px" }} />
      <div className="dialog-footer">
        <div className="dialog-footer-cancel" onClick={() => onClose()}>
          <span>Cancel</span>
        </div>
        <div className="dialog-footer-register" onClick={handleSubmit}>
          <span>Register Account</span>
        </div>
      </div>
    </Dialog>
  );
};
