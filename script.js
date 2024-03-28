//! Task 1 Compare two JSON have the same property without order

let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};
 let str1 = JSON.stringify(obj1)
 console.log(str1);
 let str2 = JSON.stringify(obj2)
 console.log(str2);

 /*if(str1===str2)
 {
    console.log("The JSON objects are equal");
 }
 else{
    console.log("The JSON objects are not equal");
 }
 
*/
var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("The JSON objects are equal"+flag); 

//! Task 2 Display country flags in the console using rest countries API URL

//! Create a XHR object

var request = new XMLHttpRequest();

//! Openning a connection to server

request.open("GET","https://restcountries.com/v3.1/all",true)

//! Initiating bridge to server/sending request

request.send();

//! Server response

request.onload = function(){

    var data = request.response;
    //console.log(data);
    var result = JSON.parse(data)
    //console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png);

    }

}

//! Task 3 Using rest countries and print all countries names, region, sub-region and populations

//! Create a XHR object

var request1 = new XMLHttpRequest();

//! Openning a connection to server

request1.open("GET","https://restcountries.com/v3.1/all",true)

//! Initiating bridge to server/sending request

request1.send();

//! Server response

request1.onload = function(){

    var data = request.response;
    
    var result = JSON.parse(data)
    
    for(var i=0;i<result.length;i++){
        console.log("Countryname:"+" "+result[i].name.common, "Region:"+" "+result[i].region, "Sub-region:"+" "+result[i].subregion, "Populations:"+" "+result[i].population);

    }

}

