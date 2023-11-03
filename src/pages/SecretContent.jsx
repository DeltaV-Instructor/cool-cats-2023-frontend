import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

class SecretContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }



  //lets add auth to our get cats function




  componentDidMount() {
    this.getCats();
  }

  render() {
    let allCats = this.state.cats.map((kitty, index) => {
      return (
        <li key={index}>
          {kitty.name} at {kitty.email}
        </li>
      );
    });
    return (
      <>
        <h1>Secret Cats!</h1>
        <ul>{allCats}</ul>
      </>
    );
  }
}


export default withAuth0(SecretContent);