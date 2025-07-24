document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active class to the clicked tab
            this.classList.add("active");
            // Show the corresponding tab content
            const target = document.querySelector(this.dataset.target);
            target.classList.add("active");
        });
    });
});