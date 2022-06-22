import React from "react";
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";

const RoundButton = (props) => {
  return (
    <div>
      {" "}
      <div className="rounded-button">
        <Button className="me-2" variant="outline-primary btn-rounded">
          {props.icon && <span className="mx-3">{props.icon}</span>}{" "}
          {props.data}
        </Button>
      </div>
    </div>
  );
};

export default RoundButton;
