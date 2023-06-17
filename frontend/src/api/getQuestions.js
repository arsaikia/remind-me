import axios from 'axios';

export function getQuestions() {
  return axios.get('http://localhost:5050/questions');
};