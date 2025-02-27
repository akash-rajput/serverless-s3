import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { octokit } from './client';

function RepoDetails() {
  const [repo, setRepo] = useState();
  const { repo: repoName, owner } = useParams();

  useEffect(() => {
    octokit
      .request('GET /repos/{owner}/{repo}', {
        owner,
        repo: repoName,
      })
      .then((data) => setRepo(data.data));
  }, [repoName, owner]);
  if (!repo) {
    return <b>loading...</b>;
  }
  return (
    <div className="repo-container">
      <h1>{repo.full_name}</h1>
      <p>Description: {repo.description}</p>
      <ul>
        <li><b>Forks:</b> {repo.forks}</li>
        <li><b>Subscribers:</b> {repo.subscribers_count}</li>
        <li><b>Watchers:</b> {repo.watchers}</li>
        <li><b>License:</b> {repo.license.name}</li>
      </ul>
    </div>
  );
}

export default RepoDetails;
