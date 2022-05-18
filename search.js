//search.js

/*var mockArray = [
    ['Bitcoin', 'Cryptocurrency', 'Bitcoin is a projec thtat is able to transfer peer to peer payments through a global distrubuted ledger.']
    ['aaaaaaa', '11111111111', 'Lorem Ipsum this a test of the data to see if connection works.']
    ['bbbbbbbb', '2222222222', 'Lorem ipsum this will be interesting']
    ['cccccccc', '3333333333', 'This is a good tv show about coindg and hacking.']
    ['dddddddd', '44444444444', 'I wonder how long I can make this sentence to test this functionality']
    ['eeeeeeeee', '5555555555', 'This is a really long way to test if this javascript code block will render the HTML correctly']
    ['fffffffff', '6666666666', 'This a really exciting project and I hope this is going to go further.']
    ['ggggggggg', '7777777777', 'This si a really fun Javascript project and javascript codebase.']
    ['hhhhhhhhhh', '8888888888', 'Cryptocurrency is the revolution and is the next phase of the human frontier of technology']
]*/

//This connects to the API and fetches all of the data from the records. 

//var resultArray = []
//result array will list each of the individual items in the array. 

var resultCount = 0
//result count should take the number frm the API for the amount of records which match the formula.

var searchResultItem = ""

var searchRecordsIndexCount = 0;

function searchTitle() {

    var searchHeader = 'Search Result'
    var searchResultTitle = document.getElementById("search-result");

    searchResultTitle.innerHTML = searchHeader;
}



var responseData = ''

function fetchData() {

    var url = "https://api.airtable.com/v0/appmaFyHEvGhBLhuV/tbliErYubz0325AdX?fields%5B%5D=_reponame&fields%5B%5D=_topics&fields%5B%5D=_description&fields%5B%5D=_homepage";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Authorization", "process.env.AIRTABLE_API_KEY);

    xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
                //alert(xhr.responseText);

                var responseData = [xhr.responseText];

                var searchResultItem = JSON.parse(responseData);
                //This variable is an object


                var resultArray = [];
                //alert(JSON.stringify(searchResultItemCount));

                var searchCount = resultArray.push(searchResultItem);

                listResults();

                //var searchResultRecords = JSON.stringify(searchResultItem["records"][0]);

                //var searchFilter = resultArray.find(results => resultArray.fields._reponame === "bitcoin");

                //document.getElementById("searchItem").innerHTML = JSON.stringify(searchResultRecords);


                for (i = 0; i < resultArray.length; i++) {
                    var c = resultArray[i];
                    //alert(resultArray.length);   
                }
            }
        };

    xhr.send();
}


function searchData() {

    var searchingQuery = document.getElementById("query").value;

    var matchQuery = JSON.stringify(searchResultItem["records"][searchRecordsIndexCount].fields);

    if (searchingQuery) {
        if (matchQuery.includes(searchingQuery)) {
            alert("the term is in the array");
            //return all of the indexes that this search term appears. We could add in a for each loop to if statement and keep checking it. 
        }
    } else {
        alert('Please enter a search query.');
    };


    var searchArray = searchResultItem.find(_reponame => _reponame === searchQuery);

    alert(searchArray);
    //We will need to search more than the product name it will need find on all of the fields e.g.description, reponame and topics.

    //return the fields that match as a new array of Indicies then we can pass each of those arrays into the for each loop. 
    //So then the loop should only continue with the list of terms that have valid strings within the array. 
}

function listResults() {
    for (i = 0; i < 100; i++) {

        const e = document.createElement('div');
        e.classList.add('container');
        var indexCount = JSON.stringify(searchResultItem["records"][searchRecordsIndexCount].fields._reponame);

        var a = document.createElement('a');
        var resultHomepage = JSON.stringify(searchResultItem["records"][searchRecordsIndexCount].fields._homepage);

        var b = document.createElement('p');
        var resultDescription = JSON.stringify(searchResultItem["records"][searchRecordsIndexCount].fields._description);

        var linebreak = '<br>';

        const f = document.createElement('div')
        f.classList.add('container');


        e.innerHTML = "Project Name:" + indexCount.replaceAll(/['"]+/g, '') + linebreak + "Project Description: " + resultDescription + linebreak;
        f.innerHTML = "Project URL:" + resultHomepage;
        //document.body.appendChild(indexCountBreak);
        document.body.appendChild(a);
        document.body.appendChild(b);
        document.body.appendChild(e);
        document.body.appendChild(f);


        searchRecordsIndexCount++;
    }
}

/* if (searchResultItem === String) {
    alert('This is a string')
}   else if (searchResultItem === Array) {
    alert('This is an array.')
} else {
    alert('This variable is a' + ' ' + (typeof searchCount))
}*/



const searchListenser = document.getElementById("search-submit");
searchListenser.addEventListener("click", searchFunction);

function searchFunction() {
    var searchQuery = document.getElementById("query").value;
    ///alert('You searched for' + " " + searchQuery);
    searchTitle();
    fetchData();
    searchData();
}



function displayResults() {
    //indexer should be able to fliter() through all of the available results from the JSON araay. 
    //once those results are filtered then they would need to be passed across to the front end and for each individual records in the filter we would need to pass a <h2> Project Title.

    //document.getElementById("searchItem").innerHTML = responseData;

    /* JSON.parse(responseData)
    var searchResult = document.getElementById("search-result");
    searchResult.innerHTML = responseData;*/

    //expects and array. 
    //for each item in the array create a new <div> 

    /*for (let i = 0; i < resultCount; i++) {
        // Runs the length of the result array. 
        console.log('Walking east one step');
        const node = document.createElement("div");
        const nameNode = document.createElement("h2");
        const descNode = document.createElement("p");
        const urlString = document.createElement('p');*/
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

/*function fetchResults() {
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
    }*/