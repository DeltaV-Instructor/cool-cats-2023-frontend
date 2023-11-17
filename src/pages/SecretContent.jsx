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
  //We need a token to send to the backend to prove we are authenticated. Lets generate the token  Json Web Token = JWT(pronouced 'JOT');
  getCats = async () => {
    try {
      //add auth if/else
      if (this.props.auth0.isAuthenticated) {
        let res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        // console.log("token ", jwt);
   //config our url to the server
        const config = {
          method: "get",
          baseURL: import.meta.env.VITE_APP_SERVER,
          url: "/cats",
          headers: { Authorization: `Bearer ${jwt}` },
        };
        // console.log('ZZZZZZz',config);
       

     
         //get reponse from server to update state
        let axiosData = await axios(config);
        console.log('back from server', axiosData.data);

        //set state
        this.setState({
          cats: axiosData.data,
        })
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  componentDidMount() {
    this.getCats();
  }

  render() {
    console.log('why no cats',this.state.cats)
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
