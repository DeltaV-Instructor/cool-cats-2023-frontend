import React from "react";
import { Container, ListGroup, Button, ListGroupItem } from "react-bootstrap";

class Cats extends React.Component {
  render() {
    console.log("PropS", this.props.cats);
    let cats = this.props.cats.map((cat) => (
      <Cat cat={cat} key={cat._id} deleteCats={this.props.deletCats} />
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
  render() {
    return <></>;
  }
}

export default Cats;
