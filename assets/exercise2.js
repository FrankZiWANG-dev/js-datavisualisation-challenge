window.onload = () => {
    let svg = dimple.newSvg("#firstHeading", 800, 600);       
           
    function updateGraph(){

        let request = new XMLHttpRequest;
        request.open('GET', 'https://canvasjs.com/services/data/datapoints.php');
        request.onload = function(){

            let originalData = JSON.parse(request.responseText);
            let data= new Array();
            

            for (x=0;x<originalData.length;x++){
                let object = new Object();
                object.X = originalData[x][0];
                object.Y = originalData[x][1];
                data.push(object);
            }

            let chart3 = new dimple.chart(svg, data);

            chart3.addCategoryAxis("x", "X");
            chart3.addMeasureAxis("y", "Y");
            chart3.addSeries(null, dimple.plot.line);
            chart3.draw();

            setTimeout(function(){
                chart3.svg.selectAll('*').remove();
                updateGraph();
            },1000);
        }
        
        request.send();

    }

    updateGraph(); 
}