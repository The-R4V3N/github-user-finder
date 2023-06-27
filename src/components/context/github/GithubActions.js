import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`)
  return response.data.items
};

// Get user and latest 5 repos
export const getUserAndLatestRepos = async (login) => {
  const [userResponse, reposResponse] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  const user = userResponse.data;
  const repos = reposResponse.data.slice(0, 5); // Retrieve only the first 5 repos

  return { user, repos };
};
