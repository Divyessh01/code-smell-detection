const axios = require('axios');
const fs = require('fs');

// GitHub API endpoint to fetch file contents
const apiUrl = 'https://api.github.com/repos/:owner/:repo/contents/:path';

// Personal access token for GitHub authentication
const token = process.env.GITHUB_TOKEN; // Store your token in an environment variable

// Function to fetch file contents from GitHub
async function fetchFile(owner, repo, path) {
    const url = apiUrl.replace(':owner', owner).replace(':repo', repo).replace(':path', path);
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching file:', error.message);
        throw error;
    }
}

// Example usage
const owner = 'Divyessh01';
const repo = 'code-smell-detection';
const filePath = 'Test.java';
fetchFile(owner, repo, filePath)
    .then(data => {
        // Process file contents
        console.log('File Contents:', data.content);
        // You can save, analyze, or perform any other operation on the file contents here
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
