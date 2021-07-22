    let request = new XMLHttpRequest;
    request.open('GET', 'https://canvasjs.com/services/data/datapoints.php');

    request.onload = function(){

        let svg = dimple.newSvg("#firstHeading", 800, 600);
        
        let originalData = JSON.parse(request.responseText);
        let data= new Array();
        

        for (x=0;x<originalData.length;x++){
            let object = new Object();
            object.X = originalData[x][0];
            object.Y = originalData[x][1];
            data.push(object);
        }

        let chart = new dimple.chart(svg, data);

        chart.addCategoryAxis("x", "X");
        chart.addMeasureAxis("y", "Y");
        chart.addSeries(null, dimple.plot.line);
        chart.draw();

        // function updateGraph(){
        //     originalData = JSON.parse(request.responseText);
        //     setTimeout(function(){updateGraph();},1000);
        // }
        
        // updateGraph();

        // setTimeout(function(){
        //     chart.svg.selectAll('*').remove();
        // }, 999);
        }

        request.send();

