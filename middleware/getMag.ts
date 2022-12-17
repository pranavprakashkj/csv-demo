import * as fs from "fs";
import * as fastCsv from "fast-csv";
// import { getMagbyisbn } from "./getMagbyisbn";

export interface Mag {
  title: string;
  isbn: number;
  authors: string;
  publishedAt: string;
}

export const magazines: Mag[] = [];
export const options = {
  objectMode: true,
  delimiter: ";",
  quote: null,
  headers: true,
  renameHeaders: false,
};
fs.createReadStream("./files/mag.csv")
  .pipe(fastCsv.parse(options))
  .on("error", (error) => {
    console.log(error);
  })
  .on("data", (row) => {
    magazines.push(row);
    // console.log(row["authors"]);
  })
  .on("end", (rowCount: number) => {
    console.log("number of Magazines = " + rowCount);
  });

export const getMags = (req: any, res: any) => {
  const titles = magazines.map((obj) => obj.title);
  res.send(magazines);
  // console.log(Magdata);
};

export const getMagbyisbn = (req: any, res: any) => {
  const isbn = req.params.id;
  const magazine = magazines.find((m) => m.isbn === isbn);
  if (magazine) {
    console.log(magazine.title);
    res.send(magazine.title);
  } else {
    console.log("nothing here");
    res.send("nothing here");
  }
};

export default magazines;
