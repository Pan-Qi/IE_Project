Plotly.d3.csv('countryOfOriginRefugee.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'origin'),
        z: unpack(rows, 'refugees'),
        text: unpack(rows, 'origin'),
        colorscale: [
                [0,'#dcdcdc'],[0.1,'#8080ff'],
                [0.25,'#6666ff'], [0.3,'#4d4dff'],
                [0.4,'#0000cc'],
                [0.6,'#0000b3'],
                [0.8,'#000099'],
                [1,'#000066']],
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
        text:'<b>Number of refugees by their country of origin</b>',
        font: {
          size: 18
        }
        },
      geo: {
          projection: {
              type: 'robinson'
          }
      },
     paper_bgcolor: '#eeeeee',
    };

    Plotly.plot(countryOfOriginRef, data, layout, {showLink: false, displaylogo: false, responsive: true});

});
