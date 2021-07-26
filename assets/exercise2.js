window.onload = () => {
    let svg = dimple.newSvg("#firstHeading", 800, 600);       
           
    function updateGraph(){
        
        fetch('https://canvasjs.com/services/data/datapoints.php', {cache: 'no-cache'})
        .then(response => response.json())
        .then(response => {

            let data= [];
            

            for (x=0;x<response.length;x++){
                let object = new Object();
                object.X = response[x][0];
                object.Y = response[x][1];
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
        })

    }

    updateGraph(); 
}