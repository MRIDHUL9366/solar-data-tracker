document.addEventListener('DOMContentLoaded', () => {
    // Set up Chart.js global defaults for our dark theme
    Chart.defaults.color = '#8B9BB4';
    Chart.defaults.font.family = 'Inter';

    const ctx = document.getElementById('portfolioChart').getContext('2d');

    // Create a beautiful neon gradient for the chart line
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(0, 240, 255, 0.5)'); // Neon blue fade
    gradient.addColorStop(1, 'rgba(0, 240, 255, 0.0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Portfolio Value',
                data: [65000, 72000, 68000, 85000, 92000, 110000, 124592],
                borderColor: '#00F0FF', // Neon Blue line
                borderWidth: 3,
                backgroundColor: gradient,
                fill: true,
                tension: 0.4, // Smooth curve
                pointBackgroundColor: '#0B0F19',
                pointBorderColor: '#00F0FF',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Hide legend for cleaner look
                },
                tooltip: {
                    backgroundColor: 'rgba(11, 15, 25, 0.9)',
                    titleColor: '#8B9BB4',
                    bodyColor: '#FFFFFF',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
        }
    });
});
