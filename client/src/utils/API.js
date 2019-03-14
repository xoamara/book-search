import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const QUERYCONSTRAINTS = "&maxResults=5&orderBy=relevance&alt=json&prettyPrint=true&key";
const APIKEY = process.env.APIKEY;

export default {
  searchBook: function (query) {
    console.log(BASEURL+query+QUERYCONSTRAINTS+APIKEY);
    return axios.get(BASEURL + query + QUERYCONSTRAINTS + APIKEY);

  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


