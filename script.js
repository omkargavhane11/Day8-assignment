
//1. Get all the countries from Asia continent /region using Filter function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function () {

    let data1 = JSON.parse(this.response);

    let result1 = data1.filter(function (item) {

        if (item.region != "Asia") {
            return false;
        }
        else {
            return true;
        }
    });

    console.log(result1);
};


//2. Getting all the countries with a population of less than 2 lakhs using Filter function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function () {

    let data2 = JSON.parse(this.response);

    let result2 = data2.filter(function (item) {

        if (item.population < 200000) {
            return true;
        }
        else {
            return false;
        }
    });

    console.log(result2);
};


//3. Printing the following details name, capital, flag using forEach function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function () {

    let data3 = JSON.parse(this.response);

    let arrayid = [];
    data3.forEach(function (item){
        arrayid.push(`[Name: ${item.name}, Capital: ${item.capital}, Flag: ${item.flag}]`)
        // arrayid.push(item.name);
        // arrayid.push(item.capital);
        // arrayid.push(item.flag);
    })
    
    console.log(arrayid);

};


//4. Printing the total population of countries using reduce function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function () {

    let data4 = JSON.parse(this.response);

    let totalpopulation = data4.reduce((acc, curr) => {
        return acc + curr.population;

    },0)

    console.log(totalpopulation);
};


// 5. Printing the country which uses US Dollars as currency.
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function () {


    let data5 = JSON.parse(this.response);

    let result3 = data5.filter(function (data) {
        if (data.currencies.name != "United States Dollar") {
            return true;
        }
        else {
            return false;
        };
    });

    console.log(result3);
};
