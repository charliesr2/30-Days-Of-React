let emptyArray = [];
let sixArray = Array(6);
let sixArrayLength = sixArray.length;
console.log("Six array length: " + sixArrayLength);
let mixedDataTypes = ['exe', 'png', 'jpg', 'mp3', 'dmg'];
let mixedLength = mixedDataTypes.length;
console.log("Mixed length: " + mixedLength);
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log("itCompanies: " + itCompanies);
console.log("itCompanies length: " + itCompanies.length);
console.log("First itCompany: " + itCompanies[0]);
console.log("Last itCompany: " + itCompanies[itCompanies.length - 1]);
let middleIndex = Math.trunc(itCompanies.length / 2);
console.log("Middle itcompany: " + itCompanies[middleIndex]);
itCompanies.forEach(company => console.log("Company number " + (itCompanies.indexOf(company) + 1) + ": " + company));
let itCompaniesUpper = [];
for (i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i];
    itCompaniesUpper.push(company.toUpperCase());
}
console.log(itCompaniesUpper);
let itCompaniesSentence = itCompanies[0];
for (i = 1; i < itCompanies.length - 1 ; i++) {
    itCompaniesSentence = itCompaniesSentence.concat(', ', itCompanies[i]);
}
itCompaniesSentence = itCompaniesSentence + " and " + itCompanies[itCompanies.length - 1] + " are big IT companies";
console.log(itCompaniesSentence);
let existent = "Facebook";
let inexistent = "Vueling";
exists(existent);
exists(inexistent);
let itCompaniesWithoutMultipeO = []
itCompanies.forEach(company => {
    if (!multipleO(company)) {
        itCompaniesWithoutMultipeO.push(company);
    }
});
console.log(itCompaniesWithoutMultipeO);
itCompanies.sort()
console.log("Sorted: " + itCompanies);
itCompanies.reverse()
console.log("Reverset: " + itCompanies);
console.log("First three: " + itCompanies.slice(0, 3));
let sliced = itCompanies.slice(middleIndex);
console.log("Last three: " + itCompanies.slice(middleIndex));
console.log("Middle: " + itCompanies.slice(middleIndex, 0 - (itCompanies.length - middleIndex - 1)));
itCompanies.shift();
console.log("First out: " + itCompanies);
itCompanies.pop();
console.log("Last out: " + itCompanies);
middleIndex = Math.trunc(itCompanies.length / 2);
itCompanies.splice(middleIndex,1)
console.log("Middle out out: " + itCompanies);
itCompanies = [];
console.log("Empty array : " + itCompanies);





function exists(company) {
    if (itCompanies.includes(company)){
        console.log("Company " + company + " found")
    } else {
        console.log("Company " + company + " not found")
    }
}

function multipleO(company) {
    let counter = 0
    for (i = 0 ; i < company.length ; i++) {
        if (company.charAt(i) == "o") counter++
    }
    return counter >= 2;
}