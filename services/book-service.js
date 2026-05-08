const fs = require('fs')
const FILE_PATH = `${__dirname}/../database/books.json`

const fetchBooks = () => {
    const fileExists = fs.existsSync(FILE_PATH);
    if (!fileExists) {
        fs.writeFileSync(FILE_PATH, '[]', 'utf-8');
    }
    return JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
}

const getBookById = (id) => {    
    const books = fetchBooks();
    return books.find(book => book.id === id);
}

const writeNewBook = (newBook) => {
    const books = fetchBooks();
    const booksLength = books.length;
    const newBookId = booksLength + 1;
    books.push({
        id: newBookId,
        ...newBook
    });
    fs.writeFileSync(FILE_PATH, JSON.stringify(books, null, 2), 'utf-8');
}

const editBookProperty = (id, updatedBookProperty) => {
    const books = fetchBooks();
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
        throw { status: 404, message: 'Livro não encontrado' }
    }
    Object.keys(updatedBookProperty).forEach(key => {
        books[bookIndex][key] = updatedBookProperty[key];
    });
    fs.writeFileSync(FILE_PATH, JSON.stringify(books, null, 2), 'utf-8');
}

const deleteBook = (id) => {
    const books = fetchBooks();
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
        throw { status: 404, message: 'Livro não encontrado' }
    }
    books.splice(bookIndex, 1);
    fs.writeFileSync(FILE_PATH, JSON.stringify(books, null, 2), 'utf-8');
}

module.exports = {
    fetchBooks,
    getBookById,
    writeNewBook,
    editBookProperty,
    deleteBook
}