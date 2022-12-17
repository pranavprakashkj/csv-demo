import * as fs from "fs";
import * as fastCsv from "fast-csv";

type Book = {
  title: string;
  isbn: number;
  authors: string;
  publishedAt: string;
};

export const books: Book[] = [];
const options = {
  objectMode: true,
  delimiter: ";",
  quote: null,
  headers: true,
  renameHeaders: false,
};
fs.createReadStream("./files/books.csv")
  .pipe(fastCsv.parse(options))
  .on("error", (error) => {
    console.log(error);
  })
  .on("data", (row) => {
    books.push(row);
  })
  .on("end", (rowCount: number) => {
    console.log("number of books = " + rowCount);
  });
export const getBooks = (req: any, res: any) => {
  const titles = books.map((obj) => obj.title);
  res.send(books);
};

export const getBookbyisbn = (req: any, res: any) => {
  const isbn = req.params.id;
  const book = books.find((b) => b.isbn === isbn);
  if (book) {
    console.log(book.title);
    res.send(book.title);
  } else {
    console.log("nothing here");
    res.send("nothing here");
  }
};

export default books;
