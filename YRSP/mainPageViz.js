// Load googleCharts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// function to draw the Chart
function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'year');
        data.addColumn('number', 'visas');
        data.addRows([
          ['2013-14', 13768],
          ['2014-15', 13759],
          ['2015-16', 17555],
          ['2016-17', 21968],
          ['2017-18', 16250]
        ]);
    
        // Set chart options
        var options = {title:'Number of Humanitarian Program Visas',
                       vAxis: {title: 'Number of visas', 
                               viewWindow: {
                                min: 0,
                                max: 25000
                                }
                              },
                       //hAxis: {},
                       legend: 'none',
                       //chartArea: {height: '80%', width: '100%'},
                       //'width':400,
                       //'height':300
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('mainPageViz'));
        chart.draw(data, options);
      }