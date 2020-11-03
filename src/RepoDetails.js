import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { octokit } from './App';

function RepoDetails() {
  const [repo, setRepo] = useState();
  const location = useLocation();
  useEffect(() => {
    console.log(location.state);
    octokit
      .request('GET /orgs/:org/repos/:repoId', {
        org: 'octokit',
        repoId: location.state.id,
      })
      .then((data) => setRepo(data.data));
  }, [location.state]);

  return (
    <div className="repo-details">
      <h1>{repo.full_name}</h1>
    </div>
  );
}

export default RepoDetails;
