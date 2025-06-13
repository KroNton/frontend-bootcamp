document.addEventListener('DOMContentLoaded', function () {
    const postsList = document.getElementById('postsList');
    const newPostForm = document.getElementById('newPostForm');

    // Fetch posts from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(posts => {
            displayPosts(posts);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            postsList.innerHTML = '<p>Error loading posts. Please try again later.</p>';
        });

    // Handle form submission for new posts
    newPostForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;

        if (title && body) {
            const newPost = {
                title: title,
                body: body,
                id: Date.now() // Generate a unique ID (for client-side only)
            };

            // Add the new post to the top of the list
            const posts = [newPost, ...Array.from(postsList.children).map(postElement => {
                return {
                    id: postElement.dataset.id,
                    title: postElement.querySelector('h3').textContent,
                    body: postElement.querySelector('p').textContent
                };
            })];

            displayPosts(posts);

            // Reset the form
            newPostForm.reset();
        }
    });

    // Function to display posts
    function displayPosts(posts) {
        postsList.innerHTML = '';

        if (posts.length === 0) {
            postsList.innerHTML = '<p>No posts available.</p>';
            return;
        }

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.dataset.id = post.id;

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            postsList.appendChild(postElement);
        });
    }
});