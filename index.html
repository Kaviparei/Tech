// Fetch the posts from the JSON file
fetch('posts.json')
    .then(response => response.json()) // Parse JSON response
    .then(posts => {
        // Select the container for displaying posts
        const postsContainer = document.getElementById('latest-posts');

        // Sort posts by date (latest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Display the latest 3 posts
        const latestPosts = posts.slice(0, 3);
        latestPosts.forEach(post => {
            // Create a post card for each blog
            const postCard = document.createElement('div');
            postCard.classList.add('post');

            postCard.innerHTML = `
                <h3><a href="${post.url}">${post.title}</a></h3>
                <p>${post.date}</p>
                <p>${post.description}</p>
            `;

            postsContainer.appendChild(postCard);
        });
    })
    .catch(error => console.error('Error loading posts:', error));

