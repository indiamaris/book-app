// app/books/page.tsx
import { findBooks } from '../lib/books/find-books';
const BooksPage = async () => {
    const books = await findBooks();

    return (
        <div>
            {books.map((book: any) => (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.resume}</p>
                    <p>{book.publisher}</p>
                    <p>{book.stars}</p>
                </div>
            ))}
        </div>
    );
};
export default BooksPage;