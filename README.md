# csv-demo

### Main Task
1. Write software that reads the CSV data (of books, magazines, and authors)
2. Rest of the routes
   List all books
   List all magazines
   Find a book  by its `isbn`
   Magazine by its `isbn`
   List all `authors`
   Find all book by their by their `authors`
   
3. Print out all books and magazines with all their details sorted by title.
4.Add a book and a magazine to the data structure of your software and export it to a new CSV file.


##### How to run the application?

```bash
npm install
```

```bash
npm start
```


## Walkthrought

1. Launch the application after installing the dependenies.

2. After launching the server based on expressjs framework will be availlable at `http://localhost:3000`

3. The webserver expose routes are given below

  * `http://localhost:3000/books`  list all books
  * `http://localhost:3000/book/{isbn}`  a single book matching the `isbn` parameter
  * `http://localhost:3000/magazines`  list all magazines
  * `http://localhost:3000/magazine{isbn}`  a single magazine matching the `isbn` parameter
  * `http://localhost:3000/authors`  list all authors 
  * `http://localhost:3000/sorted`  list all books and magazines in sorted order
  * `http://localhost:3000/add`  add book or magazine
  * `http://localhost:3000/author/{email}`  list all books and magazines from the author matching the email
  
  
Enjoy!
  
  
