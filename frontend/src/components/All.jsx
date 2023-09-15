/* eslint-disable react/prop-types */
import React from 'react';

import CodeSection from './CodeSection';
// import Tab from './Tab';
import TabbedSelection from './TabbedSelection/TabbedSelection';

function All(props) {
  const {
    allQuestionsProps: {
      // allQuestions,
      tabCookie,
      userId,
    },
  } = props;

  return (
    <div>
      <div>
        <CodeSection />

        <TabbedSelection
          allQuestionsProps={{
            tabCookie,
            userId,
          }}
        />

        {/* {
          allQuestions.groups.map((group) => (
            <Tab
              key={group}
              data={allQuestions.questions[group]}
              group={group}
              userId={userId}
              isOpen={tabCookie === group}
              tabCookie={tabCookie}
            />
          ))
        } */}
      </div>
    </div>
  );
}

export default All;
