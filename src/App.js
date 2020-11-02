import { Octokit } from '@octokit/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';

import './App.css';

export const octokit = new Octokit({});
function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <RepoList />
          </Route>
          <Route path="/respository/:id">
            <RepoDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
