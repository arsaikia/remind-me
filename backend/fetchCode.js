import colors from 'colors';
import { Octokit, App } from "octokit";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: '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' });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log(`Hello, ${login}`.green.bold);


// Get File Contents
const code = await octokit.rest.repos.getContent({
  owner: 'arsaikia',
  repo: 'Data_Structures_and_Algorithms',
  path: 'prepalgo/Arrays & Hashing/valid-anagram.py'
})

// content will be base64 encoded
const content = Buffer.from(code.data.content, 'base64').toString()
console.log(content.cyan)