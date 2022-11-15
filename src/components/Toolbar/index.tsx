import { ToolMenu, ToolButton } from "components";
import { Row, Col } from "react-bootstrap";
import "./style.scss";

export const Toolbar = ({}) => {
  return (
    <Row className="toolbar">
			<Col xs={12} md={4} className="toolbar-column">
				<ToolButton title="Button 1" />
				<ToolButton title="Button 2" />
				<ToolButton title="Button 3" />
			</Col>
			<Col md={4}></Col>
			<Col md={4} className="toolbar-column pl-auto">
				<div className="flex-md-grow-1" />
				<ToolButton title="Filter by Keyword" />
				<ToolMenu title="Export" />
			</Col>
    </Row>
  );
};
