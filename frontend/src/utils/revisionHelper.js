
const revisionSequence = [1, 1, 2, 3, 5, 8, 13, 21];

const getQuestionsToReviseToday = (allSolvedQuestions) => {
    const doToday = [];

    allSolvedQuestions.forEach(question => {
      const solvedCount = question['solveCount'];

      // find when to solve next since last solve
      const toSolveNext = revisionSequence[solvedCount];

      const daysSinceLastSolve = (new Date() - new Date(question.lastUpdatedAt)) / (1000 * 60 * 60 * 24);

      console.log(question.name, "\n \t toSolveNext: ", toSolveNext, "\n \t daysSinceLastSolve: ", daysSinceLastSolve);

        const pastFourAm = new Date().getHours() > 4;
        console.log(pastFourAm);

      if ((toSolveNext <= daysSinceLastSolve)) {
        doToday.push(question);
      }
    });

    return doToday;
}
  
export {
    revisionSequence,
    getQuestionsToReviseToday,
}