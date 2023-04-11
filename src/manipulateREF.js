import { companiesData } from "./companies-data";
import { fmData } from "./fmData";
//import { extraRecord } from "./extra-record";

const before = document.getElementById("before");

//ARRAY
const manipulatedData = fmData[3].fieldData;
//const manipulatedData = companiesData.pop(); //take last object out and set to mainpulatedData
//const manipulatedData = companiesData.shift(); //take first object out and set to mainpulatedData
//const manipulatedData = companiesData.push(extraRecord); //add new object into the end of array
//const manipulatedData = companiesData.unshift(extraRecord); //add new object into the beginning of array

//FILTER METHOD
//creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
//const manipulatedData = companiesData.filter(function(company) {    return company.fieldData.State === "TX"}); //adjust object by function, in this case 'FIND'
//const manipulatedData = companiesData.filter(function(company) {return company.fieldData.State === "TX" || company.fieldData.State === "FL"}); //adjust object by function, in this case 'FIND' with OR condition
//const manipulatedData = companiesData.filter(function(company) {return company.fieldData.State === "TX" && company.fieldData.Zip === "71789-2614"}); //adjust object by function, in this case 'FIND' with AND condition
//see https://www.w3schools.com/jsref/jsref_operators.asp for operators and their use

//MAP METHOD
//creates a new array populated with the results of calling a provided function on every element in the calling array
//const manipulatedData = companiesData.map(function(company) {return company.fieldData.City}); //returns the contents of fieldData.City as new array
//const manipulatedData = companiesData.map(function(company) {return {city: company.fieldData.City, state: company.fieldData.State}}); //returns object CITY & STATE as new array

//FOR EACH METHOD
//executes a provided function once for each array element.
//companiesData.forEach(function(company) {company.CityState = `${company.fieldData.City}, ${company.fieldData.State}`}); //returns new key value in companiesData

//UNIQUE VALUES IN ARRAY
//const manipulatedData = [... new Set( fmData.map ( obj => obj.fieldData.customerName ))].sort();

//CHAINING RESULTS TOGETHER
//NB: Up chain results MUST BE ARRAY
//const manipulatedData = companiesData.filter(function(company) {    return company.fieldData.State === "TX"}).map(function(company) {return {city: company.fieldData.City, state: company.fieldData.State}});

//INCLUDES (BOOLEAN)
//determines whether an array includes a certain value among its entries
//console.Log(manipulatedData);
//Lake Gertrude

before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
