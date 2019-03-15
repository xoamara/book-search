import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import List from "../components/List";

function ResultList(props) {

  // const renderAuthor = (props) => {
  //   const author = props.results.volumeInfo.authors;
  //   if (author === null) {
  //     return <p className="author">Author:  None</p>;
  //   } else {          
  //     return props.results.volumeInfo.authors.map(author => (
  //     <p className="author" key={author}>Author: {author}</p>
  //   ))}
  //   };


  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Card title="Search Results" className="list-group">
            <List>
              {props.results.map(result => (
                <Card.Body>
                  <li className="list-group-item" key={result.id}>
                    <Card.Img variant="top" src={result.volumeInfo.imageLinks.thumbnail} style={{ width: '10rem' }} alt={result.volumeInfo.title} />

                    <Card.Title className="title">Title:  {result.volumeInfo.title}</Card.Title>

                    {result.volumeInfo.authors.map(author => {
                      return author === null ?
                        <Card.Subtitle className="mb-1">className="author">Author: None</Card.Subtitle> : <Card.Subtitle className="author" key={author}>Author:  {author} </Card.Subtitle>
                    })
                    }
                    <Card.Text className="description">{result.volumeInfo.description}</Card.Text>
                    <Card.Link className="link" href={result.selfLink}>Link:  {result.volumeInfo.title}</Card.Link>
                    <br/>
                    <Button className="button" id={result.id} onSubmit={props.handleFormSubmit} onClick={(event) => (props.saveBook(
                      {
                        id: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        link: result.selfLink,
                        image: result.volumeInfo.imageLinks.thumbnail
                      }
                    ))}>Save Book</Button>
                  </li>
                </Card.Body>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ResultList;
