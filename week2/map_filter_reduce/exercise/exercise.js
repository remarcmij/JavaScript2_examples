'use strict';

{
  // Favourite books of Utku Kopuz, class 19
  const booksJSON = `
  [
    { "title": "The Old Man and The Sea", "language": "English", "author": "Ernest Hemmingway" },
    { "title": "The Apostates: When Muslims Leave Islam", "language": "English", "author": "Simon Cottee" },
    { "title": "Efsane", "language": "Turkish",  "author": "Iskender Pala" },
    { "title": "Robinson Crusoe", "language": "English", "author": "Daniel Defoe" },
    { "title": "Les Miserables", "language": "English", "author": "Victor Hugo" },
    { "title": "First Muslim: The Story of Muhammad", "language": "English", "author": "Lesley Hazleton" },
    { "title": "Denizler Altında 20000 Fersah", "language": "Turkish", "author": "Jules Verne" },
    { "title": "Cingöz Recai", "language": "Turkish", "author": "Peyami Safa" },
    { "title": "Just for Fun", "language": "English", "author": "Linus Torvalds" },
    { "title": "Mercan Adası", "language": "Turkish", "author": "R. M. Ballantyne"  }
  ]`;

  function getCountBooksForLanguage(books, language) {
    // replace the console.log with your code
    console.log(books.length, language);
  }

  function getAllAuthors(books) {
    // replace the console.log with your code
    console.log(books.length);
  }

  function getTitlesForLanguage(books, language) {
    // replace the console.log with your code
    console.log(books.length, language);
  }

  function getUniqueLanguages(books) {
    // replace the console.log with your code
    console.log(books.length);
  }

  function main() {
    const books = JSON.parse(booksJSON);

    const englishBookCount = getCountBooksForLanguage(books, 'English');
    console.log('Number of English books:', englishBookCount);

    const turkishBookCount = getCountBooksForLanguage(books, 'Turkish');
    console.log('Number of Turkish books:', turkishBookCount);

    const authors = getAllAuthors(books);
    console.log('All authors:', authors);

    const turkishTitles = getTitlesForLanguage(books, 'Turkish');
    console.log('Turkish titles:', turkishTitles);

    const uniqueLanguages = getUniqueLanguages(books);
    console.log('Unique languages:', uniqueLanguages);
  }

  main();
}
