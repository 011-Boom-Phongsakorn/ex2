const { Author, Book } = require('./Ex1')
const { Customer, Invoice } = require('./Ex2')


console.log('############## Ex1 ##############')

const author1 = new Author("Phongsakorn tangpok", "zny@gmail.com")
const author2 = new Author("za", "lnw@gmail.com")


const book = new Book('Ty', [author1, author2], 999, 5)

console.log(book.toString())
console.log('#################################')


console.log('############## Ex2 ##############')

const customer1 = new Customer(1, 'Boom', 0.2)
const invoice1 = new Invoice(1, customer1, 10000)

console.log(invoice1.getAmountAfterDiscount())

console.log(invoice1.toString())

console.log('#################################')