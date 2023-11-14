import axios from "axios"

const CheckCompetition = async() => {
  axios.get('http://localhost:8080/api/competitions')
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(response);
  })
}