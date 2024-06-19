const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            { label: 'Glas', data: [], backgroundColor: 'rgba(179, 196, 209, 0.7)', borderColor: 'rgba(0, 0, 0, 1)', borderWidth: 1 },
            { label: 'Weißblech', data: [], backgroundColor: 'rgba(254,255,190, 0.7)', borderColor: 'rgba(0, 0, 0, 1)', borderWidth: 1 },
            { label: 'Aluminium', data: [], backgroundColor: 'rgba(149,147,159, 0.7)', borderColor: 'rgba(0, 0, 0, 1)', borderWidth: 1 },
            { label: 'Kunststoff', data: [], backgroundColor: 'rgba(137,26,30, 0.7)', borderColor: 'rgba(0, 0, 0, 1)', borderWidth: 1 },
            { label: 'Papier, Pappe, Karton', data: [], backgroundColor: 'rgba(0,71,119, 0.7)', borderColor: 'rgba(0, 0, 0, 1)', borderWidth: 1 },
            { label: 'Flüssigkeitskarton', data: [], backgroundColor: 'rgba(255, 206, 86, 0.7)', borderColor: 'rgba(0, 0, 0, 1)', borderWidth: 1 }]           
    },
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true,
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Tonnen'
                }
            }
        }
    }
});

const data = {
    "1991": { "Glas": 4636.6, "Weißblech": 555.1, "Aluminium": 71.5, "Kunststoff": 1627.9, "Papier, Pappe, Karton": 5394.6, "Flüssigkeitskarton": 193.0},
    "1992": { "Glas": 4426.3, "Weißblech": 510.5, "Aluminium": 80.1, "Kunststoff": 1675.7, "Papier, Pappe, Karton": 5215.4, "Flüssigkeitskarton": 201.6},
    "1993": { "Glas": 4223.3, "Weißblech": 466.3, "Aluminium": 89.0, "Kunststoff": 1485.4, "Papier, Pappe, Karton": 4950.0, "Flüssigkeitskarton": 204.8},
    "1994": { "Glas": 4126.9, "Weißblech": 457.6, "Aluminium": 95.2, "Kunststoff": 1527.1, "Papier, Pappe, Karton": 5055.4, "Flüssigkeitskarton": 205.1},
    "1995": { "Glas": 3994.3, "Weißblech": 442.5, "Aluminium": 97.2, "Kunststoff": 1531.3, "Papier, Pappe, Karton": 5047.2, "Flüssigkeitskarton": 198.5},
    "1996": { "Glas": 3945.3, "Weißblech": 439.7, "Aluminium": 90.7, "Kunststoff": 1609.7, "Papier, Pappe, Karton": 5474.7, "Flüssigkeitskarton": 225.3},
    "1997": { "Glas": 3794.7, "Weißblech": 732.4, "Aluminium": 98.1, "Kunststoff": 1790.8, "Papier, Pappe, Karton": 6107.9, "Flüssigkeitskarton": 223.8},
    "1998": { "Glas": 3721.2, "Weißblech": 737.2, "Aluminium": 98.6, "Kunststoff": 1889.9, "Papier, Pappe, Karton": 6274.5, "Flüssigkeitskarton": 218.1},
    "1999": { "Glas": 3343.6, "Weißblech": 733.7, "Aluminium": 96.6, "Kunststoff": 2073.0, "Papier, Pappe, Karton": 6607.3, "Flüssigkeitskarton": 213.6},
    "2000": { "Glas": 3266.4, "Weißblech": 733.8, "Aluminium": 98.6, "Kunststoff": 2254.8, "Papier, Pappe, Karton": 6788.5, "Flüssigkeitskarton": 227.2},
    "2001": { "Glas": 3103.1, "Weißblech": 713.5, "Aluminium": 96.5, "Kunststoff": 2367.9, "Papier, Pappe, Karton": 6947.2, "Flüssigkeitskarton": 229.5},
    "2002": { "Glas": 3073.3, "Weißblech": 576.6, "Aluminium": 94.2, "Kunststoff": 2591.2, "Papier, Pappe, Karton": 7104.4, "Flüssigkeitskarton": 245.4},
    "2003": { "Glas": 2878.5, "Weißblech": 544.0, "Aluminium": 92.1, "Kunststoff": 2643.9, "Papier, Pappe, Karton": 6899.7, "Flüssigkeitskarton": 235.2},
    "2004": { "Glas": 2849.8, "Weißblech": 520.5, "Aluminium": 85.3, "Kunststoff": 2732.4, "Papier, Pappe, Karton": 7104.4, "Flüssigkeitskarton": 219.5},
    "2005": { "Glas": 2824.7, "Weißblech": 499.8, "Aluminium": 85.9, "Kunststoff": 2807.8, "Papier, Pappe, Karton": 7478.3, "Flüssigkeitskarton": 213.6},
    "2006": { "Glas": 2868.8, "Weißblech": 507.6, "Aluminium": 86.9, "Kunststoff": 2848.1, "Papier, Pappe, Karton": 7634.6, "Flüssigkeitskarton": 202.6},
    "2007": { "Glas": 2868.5, "Weißblech": 520.5, "Aluminium": 83.3, "Kunststoff": 3108.9, "Papier, Pappe, Karton": 7443.4, "Flüssigkeitskarton": 219.5},
    "2008": { "Glas": 2827.4, "Weißblech": 492.1, "Aluminium": 114.2, "Kunststoff": 3180.2, "Papier, Pappe, Karton": 7880.8, "Flüssigkeitskarton": 213.6},
    "2009": { "Glas": 3086.9, "Weißblech": 529.8, "Aluminium": 139.4, "Kunststoff": 3264.8, "Papier, Pappe, Karton": 8177.6, "Flüssigkeitskarton": 179.7},
    "2010": { "Glas": 2769.4, "Weißblech": 480.4, "Aluminium": 137.9, "Kunststoff": 3181.0, "Papier, Pappe, Karton": 8196.9, "Flüssigkeitskarton": 182.2},
    "2011": { "Glas": 2787.2, "Weißblech": 492.1, "Aluminium": 139.4, "Kunststoff": 3180.2, "Papier, Pappe, Karton": 8394.9, "Flüssigkeitskarton": 179.7},
    "2012": { "Glas": 2807.1, "Weißblech": 516.3, "Aluminium": 144.2, "Kunststoff": 3311.8, "Papier, Pappe, Karton": 8148.8, "Flüssigkeitskarton": 179.7},
    "2013": { "Glas": 2758.0, "Weißblech": 529.8, "Aluminium": 139.4, "Kunststoff": 3181.0, "Papier, Pappe, Karton": 8394.9, "Flüssigkeitskarton": 182.2},
    "2014": { "Glas": 2848.9, "Weißblech": 520.5, "Aluminium": 114.2, "Kunststoff": 3264.8, "Papier, Pappe, Karton": 7880.8, "Flüssigkeitskarton": 213.6},
    "2015": { "Glas": 2815.2, "Weißblech": 499.8, "Aluminium": 85.9, "Kunststoff": 2807.8, "Papier, Pappe, Karton": 7478.3, "Flüssigkeitskarton": 213.6 },
    "2016": { "Glas": 2891.2, "Weißblech": 520.5, "Aluminium": 83.3, "Kunststoff": 3108.9, "Papier, Pappe, Karton": 7443.4, "Flüssigkeitskarton": 219.5},
    "2017": { "Glas": 2924.1, "Weißblech": 516.3, "Aluminium": 144.2, "Kunststoff": 3264.8, "Papier, Pappe, Karton": 7880.8, "Flüssigkeitskarton": 213.6},
    "2018": { "Glas": 2981.4, "Weißblech": 529.8, "Aluminium": 139.4, "Kunststoff": 3181.0, "Papier, Pappe, Karton": 8394.9, "Flüssigkeitskarton": 179.7 },
    "2019": { "Glas": 2935.6, "Weißblech": 520.5, "Aluminium": 114.2, "Kunststoff": 3264.8, "Papier, Pappe, Karton": 7880.8, "Flüssigkeitskarton": 213.6},
    "2020": { "Glas": 3086.9, "Weißblech": 529.8, "Aluminium": 139.4, "Kunststoff": 3181.0, "Papier, Pappe, Karton": 8394.9, "Flüssigkeitskarton": 179.7},
    "2021": { "Glas": 3095.9, "Weißblech": 516.3, "Aluminium": 144.2, "Kunststoff": 3264.8, "Papier, Pappe, Karton": 7880.8, "Flüssigkeitskarton": 213.6},
};

function updateYear2Options() {
    const year1 = document.getElementById('year1').value;
    const year2Select = document.getElementById('year2');
    const year2Options = year2Select.options;
    
    for (let i = 0; i < year2Options.length; i++) {
        if (year2Options[i].value < year1) {
            year2Options[i].disabled = true;
        } else {
            year2Options[i].disabled = false;
        }
    }

    if (year2Select.value < year1) {
        year2Select.value = year1;
    }
}

function updateChart() {
    const year1 = document.getElementById('year1').value;
    const year2 = document.getElementById('year2').value;

    const labels = [];
    const glassData = [];
    const weissblechData = [];
    const aluminiumData = [];
    const kunststoffData = [];
    const papierPappeKartonData = [];
    const fluessigkeitskartonData = [];
    

    // Durchlaufe alle Jahre von year1 bis year2 und fülle die Daten arrays
    for (let year = parseInt(year1); year <= parseInt(year2); year++) {
        const yearStr = year.toString();
        labels.push(yearStr);
        glassData.push(data[yearStr]['Glas']);
        weissblechData.push(data[yearStr]['Weißblech']);
        aluminiumData.push(data[yearStr]['Aluminium']);
        kunststoffData.push(data[yearStr]['Kunststoff']);
        papierPappeKartonData.push(data[yearStr]['Papier, Pappe, Karton']);
        fluessigkeitskartonData.push(data[yearStr]['Flüssigkeitskarton']);
        
    }

    // Setze die aktualisierten Daten in das Chart-Objekt ein
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = glassData;
    myChart.data.datasets[1].data = weissblechData;
    myChart.data.datasets[2].data = aluminiumData;
    myChart.data.datasets[3].data = kunststoffData;
    myChart.data.datasets[4].data = papierPappeKartonData;
    myChart.data.datasets[5].data = fluessigkeitskartonData;
    

    // Aktualisiere das Chart
    myChart.update();
}
function filterCategory(category) {
    const datasetIndex = myChart.data.datasets.findIndex(dataset => dataset.label === category);
    const dataset = myChart.data.datasets[datasetIndex];
    dataset.hidden = !dataset.hidden; // Toggle Verstecken der Daten

    myChart.update();
}

// Event Listener für Checkboxen oder Buttons zum Filtern der Kategorien
document.querySelectorAll('.category-filter').forEach(item => {
    item.addEventListener('change', event => {
        const category = event.target.value;
        filterCategory(category);
    });
});
updateChart();