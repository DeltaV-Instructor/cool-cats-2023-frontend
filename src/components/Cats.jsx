import React from "react";
import { Container, ListGroup, Button, ListGroupItem } from "react-bootstrap";
import UpdateCatForm from "./UpdateCatForm";

class Cats extends React.Component {
  render() {
    // console.log("PropS", this.props.cat);
    let cats = this.props.cats.map((cat) => (
      <Cat
        cat={cat}
        key={cat._id}
        deleteCats={this.props.deleteCats}
        updateCats={this.props.updateCats}
      />
    ));
    return (
      <>
        <Container>
          <ListGroup>{cats}</ListGroup>
        </Container>
      </>
    );
  }
}

class Cat extends Cats {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
    };
  }

  toggleModal = () => {
    this.setState({
      showUpdateForm: !this.state.showUpdateForm,
    });
  };
  render() {
    console.log(this.state.showUpdateForm);
    return (
      <>
        <ListGroupItem>
          {this.props.cat.name} is {this.props.cat.color}
          <Button
            variant="secondary"
            onClick={this.toggleModal}
            // onClick={() => this.props.updateCats(this.props.cat._id)}
          >
            Update Cat
          </Button>
          <Button
            variant="success"
            onClick={() => this.props.deleteCats(this.props.cat._id)}
          >
            Delete Cat
          </Button>
        </ListGroupItem>

        {this.state.showUpdateForm && (
          <UpdateCatForm
            cat={this.props.cat}
            updateCats={this.props.updateCats}
            closeModal={this.toggleModal}
            showUpdateForm={this.state.showUpdateForm}
          />
        )}
      </>
    );
  }
}

export default Cats;
