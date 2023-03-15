// import React from 'react';
// import { useSelector } from 'react-redux';
// import { getBook } from 'redux/book/bookSelectors';

// export const StatisticsBookLIst = () => {
//   const listBook = useSelector(getBook);
//   return (
//     <>
//       <div>
//         <p>Назва книги</p>
//         <p>Автор</p>
//         <p>Рік</p>
//         <p>Стор.</p>
//       </div>
//       <ul>
//         {listBook.map(({ title, author, publishYear, totalPages }) => (
//           <li key={title}>
//             <p>{title}</p>
//             <p>{author}</p>
//             <p>{publishYear}</p>
//             <p>{totalPages}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
