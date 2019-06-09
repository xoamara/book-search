import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import Card from "react-bootstrap/Card";
import List from "../components/List";


class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    _id: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "", _id: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link,
        _id: this.state.id
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Card.Body bg="dark" text="white" key={book._id}>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      <Card.Img variant="top" id="bookImage" src={book.image} style={{ width: '10rem' }} />
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Author: {book.author}</Card.Subtitle>
                      <Card.Text>{book.description}</Card.Text>
                      <Card.Link href={book.link}>Link:  {book.title} </Card.Link>
                    </Card.Body>
                  ))
                  }
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Card>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Books;

