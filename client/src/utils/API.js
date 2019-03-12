import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const QUERYCONSTRAINTS = "&maxResults=5&prettyPrint=true&key=";
const APIKEY = "AIzaSyBt3CTE6ZK3Xv4KZwIUd-l599a5xAAYZOk";

export default {
  searchBook: function (query) {
    return axios.get(BASEURL + query + QUERYCONSTRAINTS + APIKEY);
  },
};
