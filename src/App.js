import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';

import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/repo/:owner/:repo" component={RepoDetails} />
          <Route path="/" component={RepoList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
