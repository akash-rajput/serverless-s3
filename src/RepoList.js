import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { octokit } from './App';

function RepoList() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    octokit.request('GET /orgs/:org/repos', {
      org: 'octokit',
    }).then(data => setRepos(data.data));
    
  }, []);

  return (
    <>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-list-item">
          <Link to={`/repo/${repo.id}`}>{repo.full_name}</Link>
        </div>
      ))}
    </>
  );
}

export default RepoList;