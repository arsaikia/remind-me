import axios from 'axios';

export function getQuestions() {
    console.log("hello: ", process.env.REACT_APP_API_BASE_URI)
  return axios.get(`${process.env.REACT_APP_API_BASE_URI}/questions`);
};