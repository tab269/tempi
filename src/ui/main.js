async function chartIt() {
    const ctx = document.getElementById("tempCanvas").getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Sensor A',
                borderColor: "red",
                showLine: true,
                fill: false,
                data: [{
                    x: moment.utc('2020-01-12T18:56:00Z'),
                    y: 0
                }, {
                    x: moment.utc('2020-01-12T18:57:00Z'),
                    y: 2
                }, {
                    x: moment.utc('2020-01-12T18:58:00Z'),
                    y: 10
                }, {
                    x: moment.utc('2020-01-12T18:59:00Z'),
                    y: 5
                }]
            },
            {
                label: 'Sensor B',
                borderColor: "blue",
                showLine: true,
                fill: false,
                data: [{
                    x: moment.utc('2020-01-12T18:56:01Z'),
                    y: 2
                }, {
                    x: moment.utc('2020-01-12T18:57:01Z'),
                    y: 3
                }, {
                    x: moment.utc('2020-01-12T18:58:01Z'),
                    y: 7
                }, {
                    x: moment.utc('2020-01-12T18:59:01Z'),
                    y: 6
                }]
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
