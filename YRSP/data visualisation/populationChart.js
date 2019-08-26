Plotly.d3.csv('population.csv', function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) {return row[key]; });
  }

  var trace1 = {
    type: "scatter",
    mode: "lines+markers",
    name: "Persons of Concern",
    x: unpack(rows, 'date'),
    y: unpack(rows, 'persons_of_concern'),
    line: {
      color: '#FF8700',
      width: 3
      
    }
  }

  var trace2 = {
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

  var trace3 = {
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

  var data = [trace1, trace2, trace3];

  var layout = {
   title: 'Population of refugees and asylum seekers in Australia',
    yaxis: {
    title: 'Population'
    },
    xaxis: {
    title: 'Year'
    },
      
  };


  Plotly.newPlot('populationChart', data, layout);

})

