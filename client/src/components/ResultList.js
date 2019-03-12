import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <p className="title">{result.volumeInfo.title}</p>
          {result.volumeInfo.authors.map(author => (
            <p className="author"></p>
          ))}
          <p className="description">{result.volumeInfo.description}</p>
          <a className="link" href={result.selfLink}>{result.selfLink}</a>
          <img className="thumbnail" src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
          <button className="button" id={result.id} onClick={(event)=>(props.saveBook(
            { 
              id: result.id, 
              title: result.volumeInfo.title, 
              author: result.volumeInfo.authors, 
              description: result.volumeInfo.description, 
              link: result.selfLink, 
              image: result.volumeInfo.imageLinks.thumbnail
            }
              ))}>Save Book</button>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
