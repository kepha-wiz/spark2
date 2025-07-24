// This file handles dynamic event filtering and sorting.

document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events-container');
    const filterSelect = document.getElementById('event-filter');
    const eventsData = []; // This will hold the events data

    // Fetch events data from the JSON file
    fetch('../data/events.json')
        .then(response => response.json())
        .then(data => {
            eventsData.push(...data);
            displayEvents(eventsData);
        })
        .catch(error => console.error('Error fetching events data:', error));

    // Function to display events
    function displayEvents(events) {
        eventsContainer.innerHTML = ''; // Clear existing events
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <p>${event.location}</p>
                <p>${event.description}</p>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }

    // Event listener for filtering events
    filterSelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        const filteredEvents = selectedCategory === 'all' 
            ? eventsData 
            : eventsData.filter(event => event.category === selectedCategory);
        displayEvents(filteredEvents);
    });
});