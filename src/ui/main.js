async function getData(sensorIdRequested) {
    const response = await fetch('http://localhost:3000/data/2020-01-02+0000.csv');
    const data = await response.text();
    const dataOut = [];

    const table = data.split('\n').slice(1);
    table.forEach(row =>  {
        const columns = row.split(',');
        const sensorId = columns[0];
        if (sensorId == sensorIdRequested) {
            const x = moment.utc(columns[1]);
            const y = parseFloat(columns[2]);
            dataOut.push({x, y});
        }
    });
    return dataOut;
}

async function chartIt() {
    const dataSensorA = await getData('28-0114543c8aaa');
    const dataSensorB = await getData('28-011453f72eaa');
    const dataSensorC = await getData('28-011453d9f5aa');
    const ctx = document.getElementById("tempCanvas").getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '8a',
                borderColor: "blue",
                showLine: true,
                fill: false,
                data: dataSensorA
            },
            {
                label: '2e',
                borderColor: "green",
                showLine: true,
                fill: false,
                data: dataSensorB
            },
            {
                label: 'f5',
                borderColor: "red",
                showLine: true,
                fill: false,
                data: dataSensorC
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            second: 'hh:mm:ss'
                        }
                    },
                    position: 'bottom'
                }]
            }
        }
    });
}

chartIt();
