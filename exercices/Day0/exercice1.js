let emptyArray = [];
let sixArray = Array(6);
let sixArrayLength = sixArray.length;
console.log("Six array length: " + sixArrayLength);
let mixedDataTypes = ['exe', 'png', 'jpg', 'mp3', 'dmg'];
let mixedLength = mixedDataTypes.length;
console.log("Mixed length: " + mixedLength);
let itCompanies = ['Facebook', 'Google', 'Microsfot', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log("itCompanies: " + itCompanies);
console.log("itCompanies length: " + itCompanies.length);
console.log("First itCompany: " + itCompanies[0]);
console.log("Last itCompany: " + itCompanies[itCompanies.length - 1]);
let middleIndex = Math.trunc(itCompanies.length / 2);
console.log("Middle itcompany: " + itCompanies[middleIndex]);
itCompanies.forEach(company => console.log("Company number " + itCompanies.firstIndexOf(company) + ": " + company));
let itCompanies
for (i = 0; i < itCompanies.length ; i++) {
    let company = itCompanies[i];
    itCompanies.shift();
}
