var readline = require('readline-sync');
var fs = require('fs');
var Request = require("request");
var filterName = readline.question("Enter your filter, either title, year, cast  ");

var inputValue = readline.question("Enter the filter value ");


Request.get("https://s3.amazonaws.com/fametechnologies/movies.json", (error, response, body) => {
    if(error){
        exit(0);
    }
    var inputData = JSON.parse(body);

    if(filterName === "title"){
        inputData.map(function(value){
            if(value.title.indexOf(inputValue) > -1){
                console.log(value);
            }
        })  
    } else if (filterName === "year"){
        inputData.map(function(value){
            if(value.year == (parseInt(inputValue,10))){
                console.log(value);
            }
        })
    }else if(filterName === "cast"){
        inputData.map(function(value){
            if(value.cast.indexOf(inputValue) > -1){
                console.log(value);
            }
        }) 
    }
})