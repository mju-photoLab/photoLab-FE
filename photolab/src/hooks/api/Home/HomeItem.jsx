import axios from "axios"

const HomeItem = async() => {
  axios.get('http://localhost:8080/api/')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
}