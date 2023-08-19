import React from 'react';

import CodeSection from '../components/CodeSection';

function Playground() {
  const codeText = `class Solution:
      # O(N) Time | O(N) Space
      def isAnagram(self, s: str, t: str) -> bool:
          if len(s) != len(t):
              return False
          sCount = [0 for __ in range(26)]
          tCount = [0 for __ in range(26)]

          for char in s:
              idx = ord(str(char)) - ord("a")
              sCount[idx] += 1

          for char in t:
              idx = ord(str(char)) - ord("a")
              tCount[idx] += 1

          return sCount == tCount
  `;

  return <CodeSection codeText={codeText} />;
}

export default Playground;
