import express from "express";
import { getBooks, getBookbyisbn } from "../middleware/getbook";
import { getMags, getMagbyisbn } from "../middleware/getMag";
import { addBookMag } from "../middleware/addBookMag";
import {
  getAuthors,
  getBookbyauthor,
  sortedMagBook,
} from "../middleware/getAuthors";

const app = express();
const port = 3000;

app.use(express.json());

// app.use("/", (req: any, res: any) => {
//   res.send("eno nindu!!!");
// });

app.use("/magazines", getMags);
app.use("/magazine/:id", getMagbyisbn);
app.use("/books", getBooks);
app.use("/book/:id", getBookbyisbn);
app.use("/authors", getAuthors);
app.use("/sorted", sortedMagBook);
app.use("/author/:id", getBookbyauthor);
app.post("/add", addBookMag);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
