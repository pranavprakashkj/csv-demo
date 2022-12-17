import * as fs from "fs";
import * as fastCsv from "fast-csv";
import magazines from "./getMag";
import books from "./getbook";
// import books from "./getbooks";

type Author = {
  email: string;
  firstname: string;
  lastname: string;
};

const authors: Author[] = [];
const options = {
  objectMode: true,
  delimiter: ";",
  quote: null,
  headers: true,
  renameHeaders: false,
};
fs.createReadStream("./files/author.csv")
  .pipe(fastCsv.parse(options))
  .on("error", (error) => {
    console.log(error);
  })
  .on("data", (row) => {
    authors.push(row);
  })
  .on("end", (rowCount: number) => {
    console.log("Number of Authors = " + rowCount);
  });

export const getAuthors = (req: any, res: any) => {
  const titles = authors.map((obj) => obj.email);
  res.send(authors);
};

export const getBookbyauthor = (req: any, res: any) => {
  const email = req.params.id;
  const book = books.filter((a) => a.authors === email);
  const magazine = magazines.filter((a) => a.authors === email);
  // console.log(book);
  if (book.length > 0 || magazine.length > 0) {
    // console.log(book.title, magazine?.title);
    // res.send(book?.title);
    const b = book.map((obj) => obj.title);
    const m = magazine.map((obj) => obj.title);
    console.log("books :" + b + "\nMagazines :" + m);
    res.send("books :" + b + "\n Magazines :" + m);
  } else {
    console.log("nothing here");
    res.send("nothing here");
  }
};

export const sortedMagBook = (req: any, res: any) => {
  let result = [...books, ...magazines];
  console.log(
    result.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
  );
  res.send(
    result.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
  );
};

export default authors;
