import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

class CreateCat extends React.Component {
  render() {
    return (
      <>
        <Container className="mt-5">
          <Form onSubmit={this.props.handleCatSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="spayneuter">
              <Form.Check type="checkbox" label="Spay or Neuter" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Cat to our Database
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default CreateCat;
