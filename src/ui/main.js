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
                x: -10,
                y: 0
            }, {
                x: -5,
                y: 2
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        },
        {
            label: 'Sensor B',
            borderColor: "blue",
            showLine: true,
            fill: false,
            data: [{
                x: -9,
                y: 2
            }, {
                x: -4,
                y: 3
            }, {
                x: 1,
                y: 7
            }, {
                x: 11,
                y: 6
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                position: 'bottom'
            }]
        }
    }
});