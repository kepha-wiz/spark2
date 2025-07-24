// This file implements search functionality for programs, faculty, events, or blog posts.

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");
    
    // Fetch data from JSON files
    Promise.all([
        fetch('../data/programs.json').then(response => response.json()),
        fetch('../data/faculty.json').then(response => response.json()),
        fetch('../data/events.json').then(response => response.json()),
        fetch('../data/blog-posts.json').then(response => response.json())
    ]).then(data => {
        const [programs, faculty, events, blogPosts] = data;

        // Combine all data for searching
        const allData = {
            programs: programs,
            faculty: faculty,
            events: events,
            blogPosts: blogPosts
        };

        // Event listener for search input
        searchInput.addEventListener("input", function() {
            const query = searchInput.value.toLowerCase();
            searchResultsContainer.innerHTML = ""; // Clear previous results

            // Search through all data
            for (const [category, items] of Object.entries(allData)) {
                const filteredItems = items.filter(item => 
                    item.title.toLowerCase().includes(query) || 
                    (item.description && item.description.toLowerCase().includes(query))
                );

                if (filteredItems.length > 0) {
                    const categoryHeader = document.createElement("h3");
                    categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                    searchResultsContainer.appendChild(categoryHeader);

                    filteredItems.forEach(item => {
                        const resultItem = document.createElement("div");
                        resultItem.classList.add("search-result-item");
                        resultItem.innerHTML = `<strong>${item.title}</strong><p>${item.description || ''}</p>`;
                        searchResultsContainer.appendChild(resultItem);
                    });
                }
            }
        });
    }).catch(error => {
        console.error("Error fetching data:", error);
    });
});