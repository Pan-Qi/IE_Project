Plotly.d3.csv('/Static/countryOfOriginAS.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'origin'),
        z: unpack(rows, 'asylum_seekers'),
        text: unpack(rows, 'origin'),
         colorscale: [
                [0,'#e6ffe6'],[0.1,'#99ff99'],
                [0.2,' #4dff4d'],
                [0.4,'#00cc00'],
                [0.6,'#009900'],
                [0.8,'#008000'],
                [1,'#004d00']],
        autocolorscale: false
        
    }];

    var layout = {
      margin: {
        l: 64,
        r: 64,
        b: 64,
        t: 64,
        pad: 4
      }, 
        title: {
        text:'<b>Number of asylum seekers by their country of origin</b>',
        font: {
          size: 18
        }
        },    
      geo: {
          projection: {
              type: 'robinson'
          }
      },
     paper_bgcolor: '#eeeeee'
    };

    Plotly.plot(countryOfOriginAS, data, layout, {showLink: false, displaylogo: false, responsive: true});

});
