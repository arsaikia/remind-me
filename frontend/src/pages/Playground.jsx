import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";


const Playground = () => {

  const codeText = `class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        # Memoization
        stoneSum = sum(stones)
        target = ceil(stoneSum / 2)

        def dfs(i, total):
            if total >= target or i == len(stones):
                return abs(total - (stoneSum - total))
            if (i, total) in dp:
                return dp[(i, total)]

            dp[(i, total)] = min(dfs(i + 1, total),
                                 dfs(i + 1, total + stones[i]))
            return dp[(i, total)]

        dp = {}
        return dfs(0, 0)
`;

  const { language, text, lineNumbers, wrapLines } = { language: 'python', text: codeText, lineNumbers: true, wrapLines: true};
  return (
    <div>
      <CopyBlock
          language={language}
          text={text}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
    </div>
  )
}

export default Playground