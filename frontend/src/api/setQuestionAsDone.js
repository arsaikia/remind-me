import axios from 'axios';

export function setQuestionAsDone(id) {
  return axios.post(`http://localhost:5050/questions/updateSolveCount?id=${id}`);
};
