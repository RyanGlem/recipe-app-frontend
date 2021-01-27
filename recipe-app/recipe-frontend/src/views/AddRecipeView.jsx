import React from "react";
import { Form, Button } from "react-bootstrap";

export const AddRecipeView = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control type="text" placeholder="Recipe" />
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.File id="exampleInput" type="image" label="Insert image"/>
          
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" placeholder="Description" />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label> Steps </Form.Label>
          <Form.Control type="text" placeholder= "Steps"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddRecipeView;
