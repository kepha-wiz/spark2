// This file contains interactive data visualizations using libraries like Chart.js or D3.js.

document.addEventListener('DOMContentLoaded', function () {
    // Sample data for visualization
    const data = {
        labels: ['Program A', 'Program B', 'Program C', 'Program D'],
        datasets: [{
            label: 'Enrollment Numbers',
            data: [120, 150, 80, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('enrollmentChart').getContext('2d');
    const enrollmentChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Additional visualizations can be added here
});