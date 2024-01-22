// ~ Egil Ramsten Typescript 2024 ~ 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
;
// Variables
var NumberOfBooks = 0;
var bookname = "";
var BASE_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
var BookFolder = document.querySelector("main");
var API_Return = [];
// Fetch the data
function fetchApi() {
    return __awaiter(this, void 0, void 0, function () {
        var ApiFetch, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(BASE_URL))];
                case 1:
                    ApiFetch = _a.sent();
                    return [4 /*yield*/, ApiFetch.json()];
                case 2:
                    API_Return = _a.sent();
                    console.log(API_Return);
                    CreateBooks(API_Return);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
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
