async function getData() {
    const response = await fetch("GLB.Ts+dSST.csv");
    const data = await response.text();
    console.log(data)
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              const temp = parseFloat(row[1]) + 14;
              console.log(year, temp);

              years.push(year)
              temps.push(temp)
            });
            console.log(rows)
}

let years = []
let temps = []

getData()
.then(rows => {
const ctx = document.getElementById('myChart');
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: years,
            datasets: [{
              label: 'Global Temperature in January (C) 1880-2024',
              data: temps,
              borderWidth: 1,
              borderColor:'rgb(63, 26, 228)',
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false,
                ticks: {
                  stepSize: 0.2,
                }
              }
            }
          }
        });
})