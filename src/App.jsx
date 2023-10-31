import React from "react";
import "./css/App.css";
import axios from "axios";
// import About from './components/About';
import { Outlet } from "react-router-dom";
import Header from './components/Nav';
import { Container } from "react-bootstrap";
// import Cats from './components/Cats';
import CreateCat from "./components/CreateCat";
import Cats from './components/Cats';

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
      // console.log('what happened! ',results);
      this.setState({
        cats: results.data,
      })
    } catch (error) {
      console.log("we have an error: ", error.response.data);
    }
  };



// handle the submit
handleCatSubmit = (event) => {
  event.preventDefault();
// console.log(event.target.name.value);
let newCat = {
  name: event.target.name.value,
  color: event.target.color.value,
  location:event.target.location.value,
  spayNeuter:event.target.spayneuter.checked,
}
// console.log('new cat?', newCat);
this.postCats(newCat);
}

// post to the server which will post to the database
postCats = async (newCatObject) => {
// console.log('object and server ', VITE_APP_SERVER,  newCatObject);
try {
  let url = `${VITE_APP_SERVER}/cats`;
  let createdCat = await axios.post(url, newCatObject);
  // console.log('!!!!!!!!',createdCat.data);
  // take the updated cat data and update state with it
  // spread operator [... take in all the stuff. ]
  this.setState({
    cats: [...this.state.cats, createdCat.data]
  })
} catch (error) {
  console.log('we have an error', error.response.data);
}










}
// add delete to delete from the DB and then update state without the deleted cat.
deleteCats = async (id) => {

console.log('button click', id);
  try {
    let url = `${VITE_APP_SERVER}/cats/${id}`;
    await axios.delete(url);
    // that takes care of deleting cat through server to database 
    //we now need to remove the cat from state. so it does not render out after being deleted.
    let updatedCats = this.state.cats.filter(cat => cat._id != id);
    this.setState({
      cats: updatedCats
    });
  } catch (error) {
    console.log('we have a delete error', error.response.data);
  }
}







  // we are talk about the REACT life cycle
  //render out our Database Cats.
  componentDidMount(){
    this.getCats();
  }


  render() {
    console.log('CCCCC',this.state.cats);
    return (
      <>
      <Header />
      {/* conditional render for our cats  */}
      <Container>World of Cats</Container>
      {/* we will have the create Cat form from its component */}
     <main>
      {
        this.state.cats.length > 0 && 
        <>
          <Cats cats={this.state.cats} deleteCats={this.deleteCats} />
        </>
      }
     </main>


        <CreateCat handleCatSubmit={this.handleCatSubmit} />
        {/* add OUTLET  */}
        <Outlet />
      </>
    );
  }
}

export default App;
