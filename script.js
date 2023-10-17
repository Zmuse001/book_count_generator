// The list of books is stored in a JavaScript object called `books``.
// Your task is to create a function called `countBooksByGenre(books, genre)`` 
// that takes this object and a genre as input and returns the number of books in that genre.
// use for/in loop.
// print results to #result p tag.
$(document).ready(function(){
    const books = {
        book1: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
        book2: { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
        book3: { title: "1984", author: "George Orwell", genre: "Science Fiction" },
        book4: { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
        book5: { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" }
    };

    $("#countBooksButton").click(function(){
        const selectedGenre = $("#genreSelector").val();
        console.log(selectedGenre);

        const resultElement = $("#result");

        var count = 0
        for (var book in books){
            if(books[book].genre == selectedGenre){
                count++;
            }
        }
        resultElement.text(`Number of ${selectedGenre} books ${count}`);
    })
});