import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

class UpdateCatForm extends React.Component {




//we need to handle the submit

handleCatSubmit =(event) => {
  event.preventDefault();
  let catToUpdate = {
    name: event.target.name.value || this.props.cat.name,
    color: event.target.color.value || this.props.cat.color,
    spayneuter: event.target.spayneuter.checked,
    location:  event.target.location.value || this.props.location,
    //lastly add the id
    _id: this.props.cat._id,
    __v: this.props.cat.__v
  };
  // console.log(catToUpdate);
  this.props.updateCats(catToUpdate);
}







  render() {
    return (
      <>
        <Modal show={this.props.showUpdateForm} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update our Cat</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleCatSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  placeholder={this.props.cat.name}/>
            </Form.Group>

            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" placeholder={this.props.cat.color}            />
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder={this.props.cat.location}   />
            </Form.Group>

            <Form.Group controlId="spayneuter">
              <Form.Check type="checkbox" label="Spay or Neuter" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Cat to our Database
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}

export default UpdateCatForm;
