let table1 = document.getElementById("table1");

//create array with years
let year = [];
for (x=2; x<=12; x++){
    year.push(table1.rows[1].cells[x].innerHTML);
}
console.log(year);
//array of amounts of crime in one country
let crime = [];

//array of objects (year and crime) = crime by year in one country
let country = [];

//array of countries = crime by year in all countries
let data1 = [];

// loop of all countries
for (y=2; y<=38;y++){
    test = 2;
    crime = [];

    //crime in one country
    for (x=2; x<=12; x++){
        crime.push(table1.rows[test].cells[x].innerHTML);
        console.log(crime);

        if (x==11){
            test ++;
        }
    }
    
    country = [];

    // crime by year in one country
    for (z=0;z<=10;z++){
        let crimeByYear = new Object();
        crimeByYear.Year = year[z];
        crimeByYear.Crime = crime[z];
        country.push(crimeByYear);
    }

    data1.push(country);
    console.log(country);
}

console.log(data1);

let svg = dimple.newSvg("h3", 800, 600);
let chart = new dimple.chart(svg, data1[0]);
// chart.setBounds(20, 20, 360, 160);

        chart.addCategoryAxis("x", "Year");
        chart.addMeasureAxis("y", "Crime");
        chart.addSeries(null, dimple.plot.line);
        // y1 = chart.addMeasureAxis("y", "Belgium");
        // y2 = chart.addMeasureAxis("y", "Bulgaria");
        // chart.addMeasureAxis("y", "Czech Republic");
        // chart.addMeasureAxis("y", "Denmark");
        // chart.addMeasureAxis("y", "Germany");
        // chart.addMeasureAxis("y", "Estonia");
        // chart.addMeasureAxis("y", "Ireland");
        // chart.addMeasureAxis("y", "Greece");
        // chart.addMeasureAxis("y", "Spain");
        // chart.addMeasureAxis("y", "France");
        // chart.addMeasureAxis("y", "Croatia");
        // chart.addMeasureAxis("y", "Italy");
        // chart.addMeasureAxis("y", "Cyprus");
        // chart.addMeasureAxis("y", "Latvia");
        // chart.addMeasureAxis("y", "Lithuania");
        // chart.addMeasureAxis("y", "Luxembourg");
        // chart.addMeasureAxis("y", "Hungary");
        // chart.addMeasureAxis("y", "Malta");
        // chart.addMeasureAxis("y", "The Netherlands");
        // chart.addMeasureAxis("y", "Austria");
        // chart.addMeasureAxis("y", "Poland");
        // chart.addMeasureAxis("y", "Portugal");
        // chart.addMeasureAxis("y", "Romania");
        // chart.addMeasureAxis("y", "Slovenia");
        // chart.addMeasureAxis("y", "Slovakia");
        // chart.addMeasureAxis("y", "Finland");
        // chart.addMeasureAxis("y", "Sweden");
        // chart.addMeasureAxis("y", "Iceland");
        // chart.addMeasureAxis("y", "Liechtenstein");
        // chart.addMeasureAxis("y", "Norway");
        // chart.addMeasureAxis("y", "Switzerland");
        // chart.addMeasureAxis("y", "Montenegro");
        // chart.addMeasureAxis("y", "Macedonia");
        // chart.addMeasureAxis("y", "Serbia");
        // chart.addMeasureAxis("y", "Turkey");
        
        // chart.addSeries(null, dimple.plot.line, [x, y1]);
        // chart.addSeries(null, dimple.plot.line, [x, y2]);

        chart.draw();