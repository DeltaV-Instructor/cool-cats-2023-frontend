import React from "react";
import { Container, ListGroup, Button, ListGroupItem } from "react-bootstrap";

class Cats extends React.Component {
  render() {
    // console.log("PropS", this.props.cat);
    let cats = this.props.cats.map((cat) => (
      <Cat cat={cat} key={cat._id} deleteCats={this.props.deleteCats} />
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
    return(
    <>
      <ListGroupItem>
      {this.props.cat.name} is {this.props.cat.color}
      
      <Button variant="success" onClick={() => this.props.deleteCats(this.props.cat._id)}>Delete Cat</Button>
      </ListGroupItem>
    </>
    )
  }
}

export default Cats;
