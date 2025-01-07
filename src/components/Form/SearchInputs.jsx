import React from "react";
import InputStyle from "../../scss/searchStyle.module.scss";
import { Form, Button } from "react-bootstrap";

function SearchInputs() {
  return (
    <div className={InputStyle.container}>
      <Form.Select
        aria-label="Default select example"
        className={InputStyle.formType}
      >
        <option value="" disabled selected>
          Type
        </option>
        <option value="1">Type</option>
        <option value="2">Type</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        className={InputStyle.formCity}
      >
        <option value="" disabled selected>
          City
        </option>
        <option value="1">City</option>
        <option value="2">City</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        className={InputStyle.formRooms}
      >
        <option value="" disabled selected>
          Rooms
        </option>
        <option value="1">Rooms</option>
        <option value="2">Rooms</option>
      </Form.Select>
      <Button className={InputStyle.formButton}>Search</Button>
    </div>
  );
}

export default SearchInputs;
