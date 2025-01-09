import React from "react";
import InputStyle from "../../scss/searchStyle.module.scss";
import { Form, Button } from "react-bootstrap";

function SearchInputs({ types, locations, rooms }) {
  return (
    <div className={InputStyle.container}>
      <Form.Select
        aria-label="Default select example"
        className={InputStyle.formType}
      >
        <option value="" disabled selected>
          Type
        </option>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        className={InputStyle.formCity}
      >
        <option value="" disabled selected>
          City
        </option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        className={InputStyle.formRooms}
      >
        <option value="" disabled selected>
          Rooms
        </option>
        {rooms.map((room, index) => (
          <option key={index} value={room}>
            {room}
          </option>
        ))}
      </Form.Select>
      <Button className={InputStyle.formButton}>Search</Button>
    </div>
  );
}

export default SearchInputs;
