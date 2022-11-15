import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { navigate } from "@reach/router";
import { FormInput, FormCheckbox, Button, RegisterDialog } from "components";
import LogoImg from "assets/icons/logo.svg";
import HeroImg from "assets/icons/hero.png";
import Divider from "@mui/material/Divider";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import "./style.scss";

export const LoginPage: React.FC<RouteComponentProps> = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {}, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    if (name != "" && password != "") {
      navigate("/dashboard");
    }
  };

  return (
    <Container fluid className="login">
      <Row className="login-row">
        <Col className="d-flex flex-column p-0">
          <Image src={LogoImg} className="login-logo" />
          <Form className="login-form" onSubmit={handleSubmit}>
            <FormInput
              type="text"
              label="Username"
              value={name}
              submitted={submitted}
              updateValue={(val) => setName(val)}
            />
            <FormInput
              type="password"
              label="Password"
              value={password}
              submitted={submitted}
              updateValue={(val) => setPassword(val)}
            />
            <FormCheckbox />
            <Button>Sign On</Button>
          </Form>
          <Row className="login-footer">
            <Col></Col>
            <Col className="d-flex flex-row justify-content-center align-items-center">
              <span className="login-footer-link" onClick={() => setOpen(true)}>
                Register
              </span>
              <Divider
                orientation="vertical"
                sx={{
                  width: "1px",
                  height: "24px",
                  margin: "0px 15px",
                  backgroundColor: "black",
                }}
              />
              <span className="login-footer-link">Forgot password?</span>
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col
          className="p-0 d-none d-md-block"
          style={{
            width: "100%",
            height: "100%",
						backgroundSize: 'cover',
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.57) 100%), url(${HeroImg})`,
          }}
        >
        </Col>
      </Row>
      <RegisterDialog open={open} onClose={() => setOpen(false)} />
    </Container>
  );
};
