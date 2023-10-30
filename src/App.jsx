import React from "react";
import "./App.css";
import axios from "axios";

let VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;
// console.log('server',VITE_APP_SERVER);

class App extends React.Component {
  // add some state to get some cats from our database
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  //create an arrow function to call the server
  getCats = async () => {
  console.log(`${VITE_APP_SERVER}/cats`);
    try {
      //we need to call the server to get cats from the Database
      let results = await axios.get(`${VITE_APP_SERVER}/cats`);
      console.log('what happened! ',results);
    } catch (error) {
      console.log("we have an error: ", error.response.data);
    }
  };

  // we are talk about the REACT life cycle
  //render out our Database Cats.
  componentDidMount(){
    this.getCats();
  }


  render() {
    // loop through our cats here
    return (
      <>
        <h1>hello</h1>
      </>
    );
  }
}

export default App;
