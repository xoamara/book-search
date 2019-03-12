import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <p className="title">{result.volumeInfo.title}</p>
          <p className="author">{result.volumeInfo.author}</p>
          <p className="description">{result.volumeInfo.description}</p>
          <a className="link" href={result.selfLink}>{result.selfLink}</a>
          <img className="thumbnail" src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
