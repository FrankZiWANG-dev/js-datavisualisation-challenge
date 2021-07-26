let table1 = document.getElementById("table1");

//create array with years
let year = [];
for (let x=2; x<=12; x++){
    year.push(table1.rows[1].cells[x].innerHTML);
}
//array of amounts of crime in one country
let crime = [];

// //array of objects (year and crime) = crime by year in one country
// let country = [];

//array of countries = crime by year in all countries
let data1 = [];

// loop of all countries
// for (y=2; y<=38;y++){
//     test = 2;
//     crime = [];

//     //crime in one country
//     for (x=2; x<=12; x++){
//         crime.push(table1.rows[test].cells[x].innerHTML);
//         console.log(crime);

//         if (x==11){
//             test ++;
//         }
//     }
    
//     country = [];

//     // crime by year in one country
//     for (z=0;z<=10;z++){
//         let crimeByYear = new Object();
//         crimeByYear.Year = year[z];
//         crimeByYear.Crime = crime[z];
//         country.push(crimeByYear);
//     }

//     data1.push(country);
//     console.log(country);
// }

// console.log(data1);

//need to create array of objects, each object has year and all countries crime that year
//loop through all years
for (let y=2; y<=12;y++){
    test= y;
    crime = [];
    crime.push(year[y-2]);

    //loop through all countries and take crime that year
    for (let z=2; z<=36;z++){
        crime.push(table1.rows[z].cells[test].innerHTML);

        if (z==36){
            test++;
        }
    }
    
    //create object of crime by year and push into array
    let crimeByYear = Object.assign({}, crime);
    data1.push(crimeByYear);

}

let svg = dimple.newSvg("h3", 800, 600);
let chart = new dimple.chart(svg, data1);

let colors = []

for (let v=0; v<=36;v++){
    color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    colors.push(color);
}

        let x = chart.addCategoryAxis("x", "0", colors[3]);
        let y1= chart.addMeasureAxis("y","1");
        let y2= chart.addMeasureAxis("y","2");
        let y3= chart.addMeasureAxis("y","3");
        let y4= chart.addMeasureAxis("y","4");
        let y5= chart.addMeasureAxis("y","5");
        let y6= chart.addMeasureAxis("y","6");
        let y7= chart.addMeasureAxis("y","7");
        let y8= chart.addMeasureAxis("y","8");
        let y9= chart.addMeasureAxis("y","9");
        let y10= chart.addMeasureAxis("y","10");
        let y11= chart.addMeasureAxis("y","11");
        let y12= chart.addMeasureAxis("y","12");
        let y13= chart.addMeasureAxis("y","13");
        let y14= chart.addMeasureAxis("y","14");
        let y15= chart.addMeasureAxis("y","15");
        let y16= chart.addMeasureAxis("y","16");
        let y17= chart.addMeasureAxis("y","17");
        let y18= chart.addMeasureAxis("y","18");
        let y19= chart.addMeasureAxis("y","19");
        let y20= chart.addMeasureAxis("y","20");
        let y21= chart.addMeasureAxis("y","21");
        let y22= chart.addMeasureAxis("y","22");
        let y23= chart.addMeasureAxis("y","23");
        let y24= chart.addMeasureAxis("y","24");
        let y25= chart.addMeasureAxis("y","25");
        let y26= chart.addMeasureAxis("y","26");
        let y27= chart.addMeasureAxis("y","27");
        let y28= chart.addMeasureAxis("y","28");
        let y29= chart.addMeasureAxis("y","29");
        let y30= chart.addMeasureAxis("y","30");
        let y31= chart.addMeasureAxis("y","31");
        let y32= chart.addMeasureAxis("y","32");
        let y33= chart.addMeasureAxis("y","33");
        let y34= chart.addMeasureAxis("y","34");
        let y35= chart.addMeasureAxis("y","35");
        let y36= chart.addMeasureAxis("y","36");
        chart.addSeries(null, dimple.plot.line, [x, y1]);
        chart.addSeries(null, dimple.plot.line, [x, y2]);
        chart.addSeries(null, dimple.plot.line, [x, y3]);
        chart.addSeries(null, dimple.plot.line, [x, y4]);
        chart.addSeries(null, dimple.plot.line, [x, y5]);
        chart.addSeries(null, dimple.plot.line, [x, y6]);
        chart.addSeries(null, dimple.plot.line, [x, y7]);
        chart.addSeries(null, dimple.plot.line, [x, y8]);
        chart.addSeries(null, dimple.plot.line, [x, y9]);
        chart.addSeries(null, dimple.plot.line, [x, y10]);
        chart.addSeries(null, dimple.plot.line, [x, y11]);
        chart.addSeries(null, dimple.plot.line, [x, y12]);
        chart.addSeries(null, dimple.plot.line, [x, y13]);
        chart.addSeries(null, dimple.plot.line, [x, y14]);
        chart.addSeries(null, dimple.plot.line, [x, y15]);
        chart.addSeries(null, dimple.plot.line, [x, y16]);
        chart.addSeries(null, dimple.plot.line, [x, y17]);
        chart.addSeries(null, dimple.plot.line, [x, y18]);
        chart.addSeries(null, dimple.plot.line, [x, y19]);
        chart.addSeries(null, dimple.plot.line, [x, y20]);
        chart.addSeries(null, dimple.plot.line, [x, y21]);
        chart.addSeries(null, dimple.plot.line, [x, y22]);
        chart.addSeries(null, dimple.plot.line, [x, y23]);
        chart.addSeries(null, dimple.plot.line, [x, y24]);
        chart.addSeries(null, dimple.plot.line, [x, y25]);
        chart.addSeries(null, dimple.plot.line, [x, y26]);
        chart.addSeries(null, dimple.plot.line, [x, y27]);
        chart.addSeries(null, dimple.plot.line, [x, y28]);
        chart.addSeries(null, dimple.plot.line, [x, y29]);
        chart.addSeries(null, dimple.plot.line, [x, y31]);
        chart.addSeries(null, dimple.plot.line, [x, y32]);
        chart.addSeries(null, dimple.plot.line, [x, y33]);
        chart.addSeries(null, dimple.plot.line, [x, y34]);
        chart.addSeries(null, dimple.plot.line, [x, y35]);
        chart.addSeries(null, dimple.plot.line, [x, y36]);

        chart.draw();
       
        document.querySelector("#table1 caption").insertAdjacentHTML("afterend", "<noscript> Your browser doesn't support Javascript </noscript>");
        // noscript = document.createElement("noscript");
        // noscript.innerHTML = "Your browser doesn't support Javascript";
        // body.appendChild(noscript);
