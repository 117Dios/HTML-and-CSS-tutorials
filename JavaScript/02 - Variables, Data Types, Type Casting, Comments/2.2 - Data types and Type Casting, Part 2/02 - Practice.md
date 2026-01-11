# Objects

**Question 1:** Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:

- starting station (key name from, give the name of the nearest station in your area as a value);
- end station (key name to, give any other station within 100km as a value);
- the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).

The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console.

<details>
<summary>Show Example</summary>

```javascript
let ticket = {
	from: "Berlin",
	to: "Potsdam",
	price: 11
};
console.log(`Ticket from: ${ticket.from}`);
console.log(`Ticket to: ${ticket.to}`);
console.log(`Ticket price: ${ticket.price}`);
```
</details>

<hr>

**Question 2:** Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values. Try to display the individual fields on the console.

<details>
<summary>Show Example</summary>

```javascript
let person = {};
person.name = "Mary";
person.surname = "Stuart";
console.log(`${person.name} ${person.surname}`);
```
</details>

# Arrays

**Question 3:** We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:

- Speaking JavaScript, Axel Rauschmayer, 460;
- Programming JavaScript Applications, Eric Elliott, 254;
- Understanding ECMAScript 6, Nicholas C. Zakas, 352.

Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.

<details>
<summary>Show Example</summary>

```javascript
let books = [{
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliot",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];
```
</details>

<hr>

**Question 4:** Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection.

<details>
<summary>Show Example</summary>

```javascript
let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};
books.push(newBook);
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);
```
</details>

<hr>

**Question 5:** Use the slice command to copy the last two books to the new array.

<details>
<summary>Show Example</summary>

```javascript
let selectedBooks = books.slice(-2);
```
</details>

<hr>

**Question 6:** The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.

<details>
<summary>Show Example</summary>

```javascript
books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
```
</details>

<hr>

**Question 7:** Display the sum of the pages of all the books from the collection.

<details>
<summary>Show Example</summary>

```javascript
let sum = books[0].pages + books[1].pages + books[2].pages;
console.log(`pages: ${sum}`);
```
</details>