Plotly.d3.csv('/Static/population.csv', function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) {return row[key]; });
  }

  var trace1 = {
    type: "scatter",
    mode: "lines+markers",
    name: "Refugees",
    x: unpack(rows, 'date'),
    y: unpack(rows, 'refugees'),
    line: {
      color: '#0066ff',
      width: 3
    }
  }

  var trace2 = {
    type: "scatter",
    mode: "lines+markers",
    name: "Asylum Seekers",
    x: unpack(rows, 'date'),
    y: unpack(rows, 'asylum_seekers'),
    line: {
      color: '#04824C',
      width: 3
    }
  }

  var data = [trace1, trace2];

  var layout = {
        title: {
        text:'<b>Population of refugees and asylum seekers in Australia</b>',
        font: {
          size: 18
        }
        },
    yaxis: {
    title: 'Population'
    },
    xaxis: {
    title: 'Year'
    },
    paper_bgcolor: '#eeeeee'
  };


  Plotly.newPlot('populationChart', data, layout, {showLink: false, displaylogo: false, responsive: true});

})


