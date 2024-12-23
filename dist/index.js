"use strict";
const { Author, Book } = require('./Ex1');
console.log('############## Ex1 ##############');
const author1 = new Author("Phongsakorn tangpok", "zny@gmail.com");
const author2 = new Author("za", "lnw@gmail.com");
const book = new Book('Ty', [author1, author2], 999, 5);
console.log(book.toString());
console.log('#################################');
