//TABLE 1 ///////////////////////////////////////////
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

// let colors = []

// for (let v=0; v<=36;v++){
//     color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
//     colors.push(color);
// }

// function randomColor() {
//     color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
//     return color;
// }

let x = chart.addCategoryAxis("x", "0");

for (let i=0; i<=36; i++){
    chart.addSeries(null, dimple.plot.line, [x, chart.addMeasureAxis("y", i)]);
}

chart.draw();
    
document.querySelector("#table1 caption").insertAdjacentHTML("afterend", "<noscript> Your browser doesn't support Javascript </noscript>");


//TABLE 2 //////////////////////////////////////////////////
let table2 = document.getElementById("table2");

let svg2 = dimple.newSvg("#Homicides", 800, 600);
let data2 = [];

//data from table2 30 pays fois 2
let prisonTime1= table2.rows[0].cells[2].innerHTML;
let prisonTime2= table2.rows[0].cells[3].innerHTML;

//loop through every countryn creating two objects by country (one for each year)
for (let y=1; y<=30;y++){
    //prisoners by country in 2007
    prisonYear1 = new Object();
    prisonYear1.Year = prisonTime1;
    prisonYear1.Country = table2.rows[y].cells[1].innerHTML;
    prisonYear1.Prison = table2.rows[y].cells[2].innerHTML;
    data2.push(prisonYear1);

    //prisoners by country in 2010
    prisonYear2 = new Object();
    prisonYear2.Year = prisonTime2;
    prisonYear2.Country = table2.rows[y].cells[1].innerHTML;
    prisonYear2.Prison = table2.rows[y].cells[3].innerHTML;
    data2.push(prisonYear2);

}

let chart2 = new dimple.chart(svg2, data2);
chart2.addCategoryAxis("x", ["Year", "Country"]);
chart2.addMeasureAxis("y", "Prison");
chart2.addSeries(null, dimple.plot.bar);
chart2.assignColor("")

chart2.draw();

document.querySelector("#table2 caption").insertAdjacentHTML("afterend", "<noscript> Your browser doesn't support Javascript </noscript>");