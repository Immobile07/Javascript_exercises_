const book={
    title:"Harry Potter",
    author:"JK Rowling",
    pages:500
};
Object.seal(book);
book.author="Farhan";
console.log(book);
