Plotly.d3.csv('/Static/humanitarianVisasAge.csv', function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) {return row[key]; });
  }
// adding numbers for 0-14 yrs
  var age1 = {
    type: "bar",
    name: "0-14 years",
    x: unpack(rows, 'year'),
    y: unpack(rows, '0_14_years'),
    marker: {color: 'rgb(32,56,100)'},
  }
// adding numbers for 15-24 yrs
  var age2 = {
    type: "bar",
    name: "15-24 years",
    x: unpack(rows, 'year'),
    y: unpack(rows, '15_24_years'),
    marker: {color: 'rgb(47,85,151)'},
  }
// adding numbers for 25-34 yrs
  var age3 = {
    type: "bar",
    name: "25-34 years",
    x: unpack(rows, 'year'),
    y: unpack(rows, '25_34_years'),
    marker: {color: 'rgb(143,170,220)'},
  }
// adding numbers for 35-44 yrs
  var age4 = {
    type: "bar",
    name: "35-44 years",
    x: unpack(rows, 'year'),
    y: unpack(rows, '35_44_years'),
    marker: {color: 'rgb(180,199,231)'},
  }
// adding numbers for 45-59 yrs
  var age5 = {
    type: "bar",
    name: "45-59 years",
    x: unpack(rows, 'year'),
    y: unpack(rows, '45_59_years'),
    marker: {color: 'rgb(214,220,229)'},
  }
// adding numbers for 60+ yrs
  var age6 = {
    type: "bar",
    name: "60 years and over",
    x: unpack(rows, 'year'),
    y: unpack(rows, '60_years_and_over'),
    marker: {color: 'rgb(242,242,242)'},
  }
   
  var data = [age1, age2, age3, age4, age5, age6];

  var layout = {
        title: {
        text:'<b>Offshore Humanitarian Program visas granted by age group</b>',
        font: {
          size: 18
        }
        },
    barmode: 'stack',  
    yaxis: {
    title: 'Percentage of visas granted (%)'
    },
    xaxis: {
    title: 'Year'
    },
    paper_bgcolor: '#eeeeee'
  };


  Plotly.newPlot('humanitarianVisasAge', data, layout, {showLink: false, displaylogo: false, responsive: true});

})

