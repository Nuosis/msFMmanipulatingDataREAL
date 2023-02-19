import { companiesData } from "./companies-data";
import { extraRecord } from "./extra-record";
console.log("Extra" , extraRecord);

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

//OBJECT
//const manipulatedData = Object.keys(extraRecord.fieldData);
//extraRecord.fieldData.Country = "USA";
//extraRecord.fieldData.cityState = `${extraRecord.fieldData.City}, ${extraRecord.fieldData.State}`;
//delete extraRecord.fieldData.Id;
const manipulatedData = extraRecord;
//TODO: add the manipulated data array to the 'after' div. (ms: DONE)
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
