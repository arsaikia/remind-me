/* eslint-disable react/prop-types */
import React from 'react';

import CodeSection from './CodeSection';
import Tab from './Tab';

function All(props) {
  const {
    allQuestions,
    tabCookie,
    userId,
  } = props;

  return (
    <div>
      <h2>Questions</h2>
      <div>
        <CodeSection />
        {
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
        }
      </div>
    </div>
  );
}

export default All;
