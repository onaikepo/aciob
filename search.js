//search.js

const searchListenser = document.getElementById("search-submit");
searchListenser.addEventListener("click", searchFunction);

function searchFunction() {
    var searchQuery = document.getElementById("query").value;
    alert('You searched for' + " " + searchQuery);
}

function fetchResults() {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appmaFyHEvGhBLhuV');

    base('Table 1').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
            console.log('Retrieved', record.get('Name'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}
//search query

/*

eventListener is trigger - this works

.binds the search query to a variable - this works the variable is Search query. 



.check if the value of the project name is shown

if so then we need to pull:
Project Name:
Project Description: 
Project URL: 

This data is then passed through to the front end.

We have to create a variable called returnCount which will count the amount of projects return.

Then for each project return we will need to create a new Article Card which will contain the project name h1, project description as h2 and project url as h3 in italics, stylized as a URL link. This will be appended in the div section 'search-results'. 


event.preventDefault()

function 

*/