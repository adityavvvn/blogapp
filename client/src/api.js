const API_URL = process.env.REACT_APP_API_URL;

export async function fetchPosts() {
  try {
    const response = await fetch(`${API_URL}/api/posts`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}
