// Load googleCharts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// drawChart function to draw the chart
function drawChart() {
    mySchools = document.getElementById("thedropdown").value; // get the value in dropdown

    info = [{schools: "All Schools", primary: 1556, secondary: 343, pri_sec: 243, special: 108, language: 4},
    {schools: "Refugee Support Schools", primary: 32, secondary: 23, pri_sec: 6, special: 1, language: 2}
    ]; // data

    // get data for selected value in dropdown
    for(i=0; i<info.length; i++) { 
    if(mySchools == info[i].schools) {
       primary = info[i].primary;
       secondary = info[i].secondary;
       pri_sec = info[i].pri_sec;
       special = info[i].special;
       language = info[i].language;

    }// end if
    } // end for

    var data = google.visualization.arrayToDataTable([
          ['School Type', 'Number of Schools'],
          ['Primary',     primary],
          ['Secondary',      secondary],
          ['Primary/Secondary',  pri_sec],
          ['Language', language],
          ['Special',    special]
        ]);

    // options for the chart
    var options = {
      //title: 'Schools in VIC',
      pieHole: 0.4,
      width: '100%',
      height: '500px',
        //colors: ['orange','#00cc33', 'pink', 'yellow','lightblue']
    };
    // draw the chart
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);       
} 

