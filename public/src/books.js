function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}
function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const unborrowedBooks = books.filter(book => book.borrows[0].returned);
  return [borrowedBooks, unborrowedBooks];
}
function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  const result = [];
  for (let i = 0; i < borrows.length && result.length < 10; i++) {
    const borrow = borrows[i];
    const borrower = accounts.find(account => account.id === borrow.id);
    const formattedBorrow = {
      id: borrow.id,
      returned: borrow.returned,
      picture: borrower.picture,
      age: borrower.age,
      name: {
        first: borrower.name.first,
        last: borrower.name.last,
      },
      company: borrower.company,
      email: borrower.email,
      registered: borrower.registered,
    };
    result.push(formattedBorrow);
  }
  return result;
}
// function getTotalBooksCount(books) {
//   return books.length;
// }
// function getTotalAccountsCount(accounts) {
//   return accounts.length;
// }
// function getBooksBorrowedCount(books) {
//   return books.reduce((count, book) => {
//     const [recentBorrow] = book.borrows;
//     if (!recentBorrow.returned) {
//       return count + 1;
//     }
//     return count;
//   }, 0);
// }
// function getMostPopularAuthors(books, authors) {
//   const authorPopularity = {};
//   for (const book of books) {
//     const author = findAuthorById(authors, book)
//   }
//   }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
