// ~ Egil Ramsten Typescript 2024 ~ 
;
// Variables
var NumberOfBooks = 0;
var bookname = "";
var BASE_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
var BookFolder = document.querySelector("main");
var API_Return = [];
// Fetch the data
function fetchApi() {
    fetch("".concat(BASE_URL))
        .then(function (res) {
        if (res.ok) {
            return res.json();
        }
        else {
            return console.log("Something Went Very Wrong!");
        }
    })
        .then(function (data) {
        API_Return = data;
        console.log(API_Return);
        CreateBooks(API_Return);
    })
        .catch(function (error) {
        console.error(error.message);
        console.log(error);
    });
}
// Generate the books from the fetch.
function CreateBooks(API_Return) {
    // Create the Headline-element for the grid.
    var GridHeader = document.createElement("div");
    var GridHeadline = document.createElement("h1");
    var GridLead = document.createElement("p");
    GridHeader.classList.add("grid-header");
    GridHeadline.textContent = "Check out our selection of children's books";
    GridLead.textContent = "This week we can offer enhcanting stories for all ages";
    GridHeader.appendChild(GridHeadline);
    GridHeader.appendChild(GridLead);
    BookFolder.appendChild(GridHeader);
    // Create all the books in the fetch
    for (var i = 0; i < API_Return.length; i++) {
        var createAbook = API_Return[i];
        // Create the elements
        var wrapper = document.createElement("article");
        var headline = document.createElement("h2");
        var author = document.createElement("h3");
        var audience = document.createElement("p");
        // Add the values
        headline.textContent = createAbook.title;
        author.textContent = createAbook.author;
        audience.textContent = createAbook.audience;
        // append the DOM-elements
        wrapper.appendChild(headline);
        wrapper.appendChild(author);
        wrapper.appendChild(audience);
        BookFolder.appendChild(wrapper);
        // Add the classes
        wrapper.classList.add("book".concat(i));
        wrapper.classList.add("book");
        wrapper.style.backgroundColor = createAbook.color;
        // Activate the buttons
        wrapper.addEventListener("click", ChooseBook);
    }
}
function ChooseBook() {
    ClearMain();
    // Change the style of mainpage
    BookFolder.style.backgroundImage = "none";
    BookFolder.style.backgroundColor = "rgb(47,49,49)";
    BookFolder.style.display = "flex";
    // Get the ID number of the Book.
    var BookId = 0;
    for (var i = 0; i < API_Return.length; i++) {
        if (this.classList.contains("book".concat(i))) {
            BookId = i;
        }
    }
    // Create the elemets
    var infowrapper = document.createElement("div");
    var infoCard = document.createElement("div");
    var wrapper = document.createElement("article");
    var returnButton = document.createElement("button");
    var ReserveBoook = document.createElement("button");
    var optionwrapper = document.createElement("div");
    var headlineOne = document.createElement("h2");
    var headlineTwo = document.createElement("h2");
    var authorOne = document.createElement("h3");
    var authorTwo = document.createElement("h3");
    var audience = document.createElement("p");
    var publisher = document.createElement("p");
    var plot = document.createElement("p");
    var year = document.createElement("p");
    var pages = document.createElement("p");
    var lesserInfoCard = document.createElement("div");
    // Add the Classes
    infowrapper.classList.add("infowrapper");
    infoCard.classList.add("RightInfo");
    wrapper.classList.add("LeftInfo");
    returnButton.classList.add("returnbutton");
    ReserveBoook.classList.add("reservbutton");
    optionwrapper.classList.add("optionswrapper");
    headlineOne.classList.add("headlineSecond");
    headlineTwo.classList.add("headlineSecond");
    lesserInfoCard.classList.add("lesserInfoCard");
    // Add the values
    publisher.textContent = "Publisher: ".concat(API_Return["".concat(BookId)].publisher);
    plot.textContent = "Synopsis: ".concat(API_Return["".concat(BookId)].plot);
    year.textContent = "First published: ".concat(String(API_Return["".concat(BookId)].year));
    pages.textContent = "Pages: ".concat(String(API_Return["".concat(BookId)].pages));
    headlineOne.textContent = API_Return["".concat(BookId)].title;
    headlineTwo.textContent = API_Return["".concat(BookId)].title;
    authorOne.textContent = API_Return["".concat(BookId)].author;
    authorTwo.textContent = "By: ".concat(API_Return["".concat(BookId)].author);
    audience.textContent = "For ages: ".concat(API_Return["".concat(BookId)].audience);
    returnButton.textContent = "Take Me Back!";
    ReserveBoook.textContent = "Reserve This Book!";
    // Append the DOM-elements
    BookFolder.appendChild(infowrapper);
    infowrapper.appendChild(wrapper);
    infowrapper.appendChild(infoCard);
    wrapper.appendChild(headlineOne);
    wrapper.appendChild(authorTwo);
    infoCard.appendChild(plot);
    infoCard.appendChild(lesserInfoCard);
    infoCard.appendChild(optionwrapper);
    lesserInfoCard.appendChild(pages);
    lesserInfoCard.appendChild(year);
    lesserInfoCard.appendChild(audience);
    lesserInfoCard.appendChild(publisher);
    optionwrapper.appendChild(ReserveBoook);
    optionwrapper.appendChild(returnButton);
    // match the color from the API
    wrapper.style.backgroundColor = API_Return["".concat(BookId)].color;
    // Aktivate the returnbutton
    returnButton.addEventListener("click", ReturnToMain);
}
// Clear the Mainpage of elements
function ClearMain() {
    while (BookFolder.hasChildNodes()) {
        BookFolder.removeChild(BookFolder.lastChild);
    }
}
// Return to and restore the mainpage.
function ReturnToMain() {
    ClearMain();
    BookFolder.style.backgroundImage = "url(../src/Librarybackground.png)";
    BookFolder.style.backgroundColor = "none";
    BookFolder.style.display = "grid";
    CreateBooks(API_Return);
}
// Run on Launch.
fetchApi();
