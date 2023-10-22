import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import React from "react";

export const Colaboration = () => {
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">@</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </>
  );
};
