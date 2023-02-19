import { companiesData } from "./companies-data";
import { extraRecord } from "./extra-record";

const before = document.getElementById("before");

//ARRAY
//const manipulatedData = companiesData[3].fieldData;
//const manipulatedData = companiesData.pop(); //take last object out and set to mainpulatedData
//const manipulatedData = companiesData.shift(); //take first object out and set to mainpulatedData
//const manipulatedData = companiesData.push(extraRecord); //add new object into the end of array
//const manipulatedData = companiesData.unshift(extraRecord); //add new object into the beginning of array
const manipulatedData = companiesData.filter(function(company) {
    return company.fieldData.State === "TX" || company.fieldData.State === "FL"
}); //adjust object by function, in this case 'FIND' with OR condition

before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
