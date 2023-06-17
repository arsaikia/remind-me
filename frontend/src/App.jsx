import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from './actions/actions';
import { useState, useEffect } from 'react';
import Tab from './components/table'

const App = () => {

  const [toRevise, setToRevise] = useState([])

  // Get states using useSelector ( state->reducerName )
  const allQuestions = useSelector(state => state.questions);
  
  const dispatch = useDispatch();
  // Fire actions using dispatch -> fires action -> Watcher saga handles rest
  const fetchAllQuestions = () => dispatch(getQuestions());


  /**************************************************************
   * Handler Functions
  **************************************************************/
  const revisionSequence = [1, 1, 2, 3, 5, 8, 13, 21];

  const getQuestionsToReviseToday = () => {

    const allSolvedQuestions = allQuestions.questions.filter(question => question.solveCount !== 0);
    const doToday = [];

    allSolvedQuestions.forEach(question => {
      const solvedCount = question['solveCount'];

      // find when to solve next since last solve
      const toSolveNext = revisionSequence[solvedCount];

      const daysSinceLastSolve = (new Date() - new Date(question.lastUpdatedAt)) / (1000 * 60 * 60 * 24);

      // console.log("toSolveNext: ", toSolveNext, "daysSinceLastSolve: ", daysSinceLastSolve);

      if (toSolveNext <= daysSinceLastSolve) {
        doToday.push(question);
      }
    });

    setToRevise([...doToday]);

  }

  
  /**************************************************************
   * Returns JSX from here
  **************************************************************/

  return (
    <>
    
    <div>
      <h2>All Questions</h2>
      <button type="submit" onClick={fetchAllQuestions}>Get Questions</button>
      
      <Tab data={allQuestions.questions} />
    </div>


    <div>
      <h2>Today's</h2>
      <button type="submit" onClick={getQuestionsToReviseToday}>Questions to Revise Today</button>
      
      <Tab data={toRevise} />
    </div>
    </>
  );
}

export default App;
