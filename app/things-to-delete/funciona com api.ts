// ?? thats workd 
// 'use client';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const BooksPage = async () => {
//     const router = useRouter();

//     const books=await fetch('/api/books', {
//         method: 'GET',
//     });
//     const data = await books.json();
//  console.log('books', data);


    

//     const handleSubmit = () => console.log('handleSubmit');

//     return (
//         <div>
//             <h1>Add New Book</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="title" placeholder="Book Title" />
//                 <input type="text" name="author" placeholder="Author" />
//                 <input type="text" name="resume" placeholder="Resume" />
//                 <input type="text" name="publisher" placeholder="Publisher" />
//                 <input type="number" name="stars" placeholder="Stars" />
//                 <button type="submit">Add Book</button>
//             </form>
//             <h2>Existing Books</h2>
//             <ul>
//                 {books.map((book: any) => (
//                     <li key={book.id}>{book.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default BooksPage;