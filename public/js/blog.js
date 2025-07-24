const blogContainer = document.getElementById('blog-container');
const loadMoreButton = document.getElementById('load-more');
let currentPage = 1;
const postsPerPage = 5;

async function fetchBlogPosts(page) {
    const response = await fetch('../data/blog-posts.json');
    const data = await response.json();
    return data.slice((page - 1) * postsPerPage, page * postsPerPage);
}

function displayBlogPosts(posts) {
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <a href="${post.link}" class="read-more">Read More</a>
        `;
        blogContainer.appendChild(postElement);
    });
}

async function loadMorePosts() {
    const posts = await fetchBlogPosts(currentPage);
    displayBlogPosts(posts);
    currentPage++;
    if (currentPage > Math.ceil((await fetch('../data/blog-posts.json')).json().length / postsPerPage)) {
        loadMoreButton.style.display = 'none';
    }
}

loadMoreButton.addEventListener('click', loadMorePosts);
loadMorePosts();