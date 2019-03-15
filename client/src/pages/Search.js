import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  searchBook = query => {
    API.searchBook(query)
      .then(res => this.setState({ search: "", results: res.data.items }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Google API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  saveBook = book => {
    console.log(book);
    API.saveBook(book);

  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="lg-12">
              <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <ResultList
          results={this.state.results}
          saveBook={this.saveBook}
        />

      </div>
    );
  }
}

export default SearchResultContainer;
