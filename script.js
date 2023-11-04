Question1:
// How to Compare two JSON have the same properties without order?
let obj1 = {names:"Person1",age:5};
let obj2 = {age:5,names:"Person1"};

var obj1 = {name: "Person 1",age:5}
var obj2 = {age:5, names: "Person 1"};
var json1 = JSON.stringify(obj1);
console.log(json1);
var json2 = JSON.stringify(obj2);
console.log(json2);
if(json1===json2){
    console.log("Both are equal")
}
else{
        console.log("Both are different")
    }

// // question 2: Display all the country flags
// create a XHR object
var request = new XMLHttpRequest();
//Step:2 opening a connection to  a server
request.open("GET","https://restcountries.com/v3.1/all",true)
// step3  :initiating a bridge
request.send();
//step4: server response
request.onload = function(){
    var data = request.response;
    // console.log(data);
    var result = JSON.parse(data);
    console.log(result);
    // console.log(result[0].name.common);
    // console.log(result[249].area);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name.common,result[i].area);
        console.log(result[i].flags.png);
    }

 

 }
//Question:3 print all countries,names,regions,sub-regions and population


var request1 = new XMLHttpRequest();

request1.open("GET","https://restcountries.com/v3.1/all",true);

request1.send();

request1.onload = function(){
    var data1 = request1.response;
    
    var result1= JSON.parse(data1);
    // console.log(result1);
    // console.log(result[0].name.common);
    // console.log(result[249].area);
    for(var i=0;i<result1.length;i++){
        // console.log(result[i].name.common,result[i].area);
        console.log(result1[i].name.common, result1[i].region, result1[i].subregion, result1[i].population);
    }

