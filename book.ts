interface Book {
    title: string;
    author: string;
    publicationDate: number;
}

function sumBookYears(books: Book[]): number {
    let sum = 0;
    books.forEach(book => sum += book.publicationDate);
    return sum;
}

const books: Book[] = [
    {title: "The Lord of the Rings", author: "J.R.R. Tolkien", publicationDate: 1954},
    {title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", publicationDate: 1997},
    {title: "The Hobbit", author: "J.R.R. Tolkien", publicationDate: 1937},
    {title: "And Then There Were None", author: "Agatha Christie", publicationDate: 1939}];

console.log('Suma lat: ' + sumBookYears(books));