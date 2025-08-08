document.addEventListener("DOMContentLoaded", () => {
    loadRankingData();

    document.getElementById("searchForm").addEventListener("submit", function (e) {
     e.preventDefault();
        const city = document.getElementById("citySearch").value.trim();
        if (city) {
            alert(`Searching for: ${city}`);
            // Insert API call or logic to update data dynamically
        }
    });
});

// Dummy Ranking Data
function loadRankingData() {
    const rankings = [
        { city: "Delhi", aqi: 205, noise: 85 },
        { city: "Mumbai", aqi: 170, noise: 78 },
        { city: "Bangalore", aqi: 150, noise: 70 },
        { city: "Chennai", aqi: 130, noise: 65 },
    ];

    const table = document.getElementById("rankingTable");
    rankings.forEach(r => {
        const row = `<tr><td>${r.city}</td><td>${r.aqi}</td><td>${r.noise}</td></tr>`;
        table.innerHTML += row;
    });
}


function showSection(sectionId) {
    const sections = ['causes', 'effects', 'solutions'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('d-none');
    });
    document.getElementById(sectionId).classList.remove('d-none');
}
