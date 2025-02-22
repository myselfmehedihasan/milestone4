/* 3. Checking Array Membership with ‘includes’
**Instructions:**
1. Create an array of books containing different books.
2. Use the includes method to check if the array contains a javascript book.
3. Print a message to the console indicating whether the element is present in the array or not. */

const books = ['The Alchemist','The Kite Runner','The Da Vinci Code','The Godfather','The Great Gatsby','The Catcher in the Rye','The Hobbit','The Lord of the Rings','The Hunger Games'];

if (books.includes('Introduction to JavaScript')) {
    console.log('Yes, the book is in the array');
} else {
    console.log('No, the book is not in the array');
}

