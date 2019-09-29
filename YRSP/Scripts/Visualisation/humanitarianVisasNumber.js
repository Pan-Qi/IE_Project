Plotly.d3.csv('/Static/humanitarianVisasNum.csv', function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) {return row[key]; });
  }
// adding numbers for offsore resettlement component
  var offshore = {
    type: "bar",
    name: "Offshore Resettlement Component",
    x: unpack(rows, 'year'),
    y: unpack(rows, 'offshore_resettlement'),
    text: unpack(rows, 'total'),
    marker: {color: 'rgb(47,85,151)'},
  }
// adding numbers for onshore protection component
  var onshore = {
    type: "bar",
    name: "Onshore Protection Component",
    x: unpack(rows, 'year'),
    y: unpack(rows, 'onshore_protection'),
    text: unpack(rows, 'total'),
    marker: {color: 'rgb(146,208,80)'},
  }

  var data = [offshore, onshore];

  var layout = {
        title: {
        text:'<b>Number of Humanitarian Program visas granted</b>',
        font: {
          size: 18
        }
        },
    barmode: 'stack',  
    yaxis: {
    title: 'Number of visas granted'
    },
    xaxis: {
    title: 'Year'
    },
    paper_bgcolor: '#eeeeee'
  };


  Plotly.newPlot('humanitarianVisasNumber', data, layout, {showLink: false, displaylogo: false, responsive: true});

})

