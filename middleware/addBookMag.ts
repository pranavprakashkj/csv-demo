import * as fs from "fs";

import { Validator } from "jsonschema";
import { bookValidator } from "./validator";

var v = new Validator();

export const addBookMag = (req: any, res: any) => {
  const data = req.body;
  const stringData = JSON.stringify(data);
  console.log(stringData);
  if (bookValidator(data).errors.length > 0) {
    res
      .status(400)
      .send({ error: [bookValidator(data).errors], status: "failed" });
  } else {
    fs.writeFile("files/someData.csv", stringData, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Data written to new CSV file");
        res.send("file created");
      }
    });

    // res.send("file added");
    // stringify(data, (err, output) => {
    //   res.send("file added");
    //   fs.writeFileSync("new.csv", output);
    //   res.send("file added");
    // });
    // stringify(data, function (err, output) {
    //   fs.writeFile(__dirname + "/someData.csv", output, (err) => {
    //     if (err) console.log(err);
    //     else {
    //       console.log("File written successfully\n");
    //       console.log("The written has the following contents:");
    //       console.log(fs.readFileSync("books.txt", "utf8"));
    //     }
    //   });
    // });
    // res.send("file added");
  }
};
