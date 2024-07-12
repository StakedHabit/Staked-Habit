'use client'
import React from 'react'

const page = () => {

    const handleRepo = () => {
        
        // Function to fetch the latest commits of a GitHub profile
async function getLatestCommits(username: string, repoCount = 5, commitCount = 3) {
    try {
      // Fetch user's repositories
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${repoCount}`);
      const repos = await reposResponse.json();
  
      // Fetch latest commits for each repository
      const commitsPromises = repos.map(async (repo: any) => {
        const commitsResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=${commitCount}`);
        const commits = await commitsResponse.json();
        return {
            repo: repo.name,
            commits: commits.map((commit: any) => ({
              message: commit.commit.message,
              date: commit.commit.author.date,
              url: commit.html_url
            }))
          };
      });
  
      const repoCommits = await Promise.all(commitsPromises);
      return repoCommits;
    } catch (error) {
      console.error('Error fetching commits:', error);
      throw error;
    }
  }
  
  // Usage example
  async function displayLatestCommits(username: string) {
    try {
      const commits = await getLatestCommits(username);
      console.log(`Latest commits for ${username}:`, commits);
    } catch (error) {
      console.error('Failed to fetch commits:', error);
    }
  }
  
  // Example: Fetch latest commits for 'octocat'
  displayLatestCommits('gulshanpr');
    }


  return (
    <div>
        <button onClick={handleRepo}>
            click me {}
        </button>
    </div>
  )
}

export default page