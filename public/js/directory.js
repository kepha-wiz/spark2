const facultyDirectory = document.getElementById('faculty-directory');
const facultyData = []; // This will hold the faculty data

// Fetch faculty data from the JSON file
fetch('../data/faculty.json')
    .then(response => response.json())
    .then(data => {
        facultyData.push(...data);
        displayFaculty(facultyData);
    })
    .catch(error => console.error('Error fetching faculty data:', error));

// Function to display faculty members in the directory
function displayFaculty(faculty) {
    facultyDirectory.innerHTML = ''; // Clear existing content
    faculty.forEach(member => {
        const facultyCard = document.createElement('div');
        facultyCard.classList.add('faculty-card');
        facultyCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.department}</p>
            <button class="view-bio" onclick="viewBio('${member.id}')">View Bio</button>
        `;
        facultyDirectory.appendChild(facultyCard);
    });
}

// Function to view faculty bio in a lightbox
function viewBio(id) {
    const member = facultyData.find(f => f.id === id);
    if (member) {
        const bioContent = `
            <h2>${member.name}</h2>
            <p>${member.bio}</p>
            <button onclick="closeLightbox()">Close</button>
        `;
        showLightbox(bioContent);
    }
}

// Function to show lightbox
function showLightbox(content) {
    const lightbox = document.getElementById('lightbox');
    lightbox.innerHTML = content;
    lightbox.style.display = 'block';
}

// Function to close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}