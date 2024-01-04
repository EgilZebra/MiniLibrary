// ~ Egil Ramsten Typescript 2024 ~ 


// Interface
interface BOOK {
    audience: string
    author: string
    color: string
    id: number
    pages: number
    plot: string
    publisher: string
    title:string
    year: number
};

// Variables
let NumberOfBooks: number = 0; 
let bookname: string = "";
let BASE_URL: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
let BookFolder: HTMLElement = document.querySelector("main");
let API_Return: Array<BOOK>= [];

// Fetch the data
async function fetchApi() {
    try {
    let ApiFetch = await fetch(`${BASE_URL}`)
    API_Return = await ApiFetch.json(); 
            console.log(API_Return);
            CreateBooks(API_Return);
    } catch (e) {
        console.log(e);
    }  
}

// Generate the books from the fetch.
function CreateBooks(API_Return: Array<BOOK>): void {

    // Create the Headline-element for the grid.
    let GridHeader: HTMLElement = document.createElement("div")
    let GridHeadline: HTMLElement = document.createElement("h1");
    let GridLead: HTMLElement = document.createElement("p");
    GridHeader.classList.add("grid-header")
    GridHeadline.textContent = "Check out our selection of children's books"
    GridLead.textContent = "This week we can offer enhcanting stories for all ages"
    GridHeader.appendChild(GridHeadline);
    GridHeader.appendChild(GridLead);
    BookFolder.appendChild(GridHeader);

    // Create all the books in the fetch
    for (let i: number = 0; i < API_Return.length; i++) {
        let createAbook: BOOK = API_Return[i];
        
        // Create the elements
        let wrapper: HTMLElement = document.createElement("article");
        let headline: HTMLElement = document.createElement("h2");
        let author: HTMLElement = document.createElement("h3");
        let audience: HTMLElement = document.createElement("p");

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
        wrapper.classList.add(`book${i}`);
        wrapper.classList.add(`book`);
        wrapper.style.backgroundColor = createAbook.color;
        
        // Activate the buttons
        wrapper.addEventListener("click", ChooseBook)
    }

}

function ChooseBook(): void {

    ClearMain();

    // Change the style of mainpage
    BookFolder.style.backgroundImage = "none";
    BookFolder.style.backgroundColor = "rgb(47,49,49)";
    BookFolder.style.display = "flex";

    // Get the ID number of the Book.
    let BookId: number = 0;
    for ( let i: number = 0; i < API_Return.length; i++) {
        if (this.classList.contains(`book${i}`)) {
            BookId = i;
        }
    }

    // Create the elemets
    let infowrapper: HTMLElement = document.createElement("div");   
    let infoCard: HTMLElement = document.createElement("div");   
    let wrapper: HTMLElement = document.createElement("article");    
    let returnButton: HTMLElement = document.createElement("button");    
    let ReserveBoook: HTMLElement = document.createElement("button");   
    let optionwrapper: HTMLElement = document.createElement("div");    
    let headlineOne: HTMLElement = document.createElement("h2");    
    let headlineTwo: HTMLElement = document.createElement("h2");    
    let authorOne: HTMLElement = document.createElement("h3");
    let authorTwo: HTMLElement = document.createElement("h3");
    let audience: HTMLElement = document.createElement("p");
    let publisher: HTMLElement = document.createElement("p")
    let plot: HTMLElement = document.createElement("p")
    let year: HTMLElement = document.createElement("p")
    let pages: HTMLElement = document.createElement("p")
    let lesserInfoCard: HTMLElement = document.createElement("div");
    
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
    publisher.textContent = `Publisher: ${API_Return[`${BookId}`].publisher}`;
    plot.textContent = `Synopsis: ${API_Return[`${BookId}`].plot}`;
    year.textContent = `First published: ${String(API_Return[`${BookId}`].year)}`;
    pages.textContent = `Pages: ${String(API_Return[`${BookId}`].pages)}`;
    headlineOne.textContent = API_Return[`${BookId}`].title;
    headlineTwo.textContent = API_Return[`${BookId}`].title;
    authorOne.textContent = API_Return[`${BookId}`].author;
    authorTwo.textContent = `By: ${API_Return[`${BookId}`].author}`;
    audience.textContent = `For ages: ${API_Return[`${BookId}`].audience}`;
    returnButton.textContent = "Take Me Back!"
    ReserveBoook.textContent = "Reserve This Book!"

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
    wrapper.style.backgroundColor = API_Return[`${BookId}`].color;

    // Aktivate the returnbutton
    returnButton.addEventListener("click", ReturnToMain);
}

// Clear the Mainpage of elements
function ClearMain(): void {
    while (BookFolder.hasChildNodes()) {
        BookFolder.removeChild(BookFolder.lastChild);
    }
}

// Return to and restore the mainpage.
function ReturnToMain(): void {
    ClearMain()
    BookFolder.style.backgroundImage = "url(../src/Librarybackground.png)";
    BookFolder.style.backgroundColor = "none";
    BookFolder.style.display = "grid";
    CreateBooks(API_Return);
}

// Run on Launch.
fetchApi()