import React from "react";
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ListGroup className="list-group" variant="dark">
    {children}
  </ListGroup>
);

export function ListItem({ children }) {
  return <ListGroupItem className="list-group-item">{children}</ListGroupItem>;
}

export default List;