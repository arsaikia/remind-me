import axios from 'axios';

export function setQuestionAsDone(id) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URI}/questions/updateSolveCount?id=${id}`);
};
