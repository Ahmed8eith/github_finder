import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || 'https://api.github.com';

export const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search for users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    try {
      const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
      if (!response.ok) throw new Error('Failed to fetch users');

      const { items } = await response.json();

      dispatch({
        type: 'GET_USERS',
        payload: items,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Get a single user
  const getUser = async (login) => {
    setLoading();

    try {
      const response = await fetch(`${GITHUB_URL}/users/${login}`);
      if (response.status === 404) {
        window.location = '/notfound';
        return;
      }

      const data = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Get user repos
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    });

    try {
      const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
      if (!response.ok) throw new Error('Failed to fetch repositories');

      const data = await response.json();

      dispatch({
        type: 'GET_REPOS',
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Set loading state
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        dispatch,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
