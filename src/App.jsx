import React from "react";
import "./css/App.css";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Header from "./components/Nav";
import { Container } from "react-bootstrap";
import CreateCat from "./components/CreateCat";
import Cats from "./components/Cats";

let VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  getCats = async () => {
    console.log(`${VITE_APP_SERVER}/cats`);
    try {
      let results = await axios.get(`${VITE_APP_SERVER}/cats`);
      this.setState({
        cats: results.data,
      });
    } catch (error) {
      console.log("we have an error: ", error.response.data);
    }
  };

  handleCatSubmit = (event) => {
    event.preventDefault();
    let newCat = {
      name: event.target.name.value,
      color: event.target.color.value,
      location: event.target.location.value,
      spayNeuter: event.target.spayneuter.checked,
    };
    this.postCats(newCat);
  };

  postCats = async (newCatObject) => {
    try {
      let url = `${VITE_APP_SERVER}/cats`;
      let createdCat = await axios.post(url, newCatObject);
      this.setState({
        cats: [...this.state.cats, createdCat.data],
      });
    } catch (error) {
      console.log("we have an error", error.response.data);
    }
  };
  deleteCats = async (id) => {
    try {
      let url = `${VITE_APP_SERVER}/cats/${id}`;
      await axios.delete(url);
      let updatedCats = this.state.cats.filter((cat) => cat._id != id);
      this.setState({
        cats: updatedCats,
      });
    } catch (error) {
      console.log("we have a delete error", error.response.data);
    }
  };

  updateCats = async (catToUpdate) => {
    console.log("onclick gives up", catToUpdate);
    try {
      let url = `${VITE_APP_SERVER}/cats/${catToUpdate._id}`;
      console.log(url)
      
      let updatedCat = await axios.put(url, catToUpdate);

      console.log(updatedCat);
      //so when we get our updated cat back we need to update state.
      let updatedCatArray = this.state.cats.map((exsistingCat) => {
        return exsistingCat._id === catToUpdate._id
          ? updatedCat.data
          : exsistingCat
      });
      
      this.setState({
        cats: updatedCatArray,
      });
    } catch (error) {
      console.error("we have an ERrrror", error);
    }
  };

  componentDidMount() {
    this.getCats();
  }

  render() {
    return (
      <>
        <Header />
        <Container>World of Cats</Container>
        <main>
          {this.state.cats.length > 0 && (
            <>
              <Cats
                cats={this.state.cats}
                deleteCats={this.deleteCats}
                updateCats={this.updateCats}
              />
            </>
          )}
        </main>

        <CreateCat handleCatSubmit={this.handleCatSubmit} />
        <Outlet />
      </>
    );
  }
}

export default App;
