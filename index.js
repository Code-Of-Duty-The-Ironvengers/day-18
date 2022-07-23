// an ORM stands for Object Relationship Mapper
// Mongoose is an ODM -> Object Document Mapper

// Document
// Collection
// Database

// A Document (in MongoDB) is the smallest unit. Its a representation of a single entity of data

// Collection (in MongoDB) is an arrangement of similar documents combined into one section

// Database (in MongoDB) is a list of important for the same application collections

const mongoose = require("mongoose");

// Schema (mongoose term)
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  releaseDate: Date,
  publisher: String,
  pages: Number,
  issue: Number,
  isInPreSale: Boolean,
});

const listOfBooks = [
  {
    title: "Javascript for Dummies",
    author: "Asem, asem is the author",
    releaseDate: new Date(),
    publisher: "Ironhack",
    pages: 351,
    issue: 1,
    isInPreSale: true,
  },
  {
    title: "The Pillars of the Internet",
    author: "Tony",
    releaseDate: new Date(),
    publisher: "The Web",
    pages: 1991,
    issue: 5,
    isInPreSale: false,
  },
  {
    title: "How to love cats? You dont",
    author: "Elvan",
    releaseDate: new Date(),
    publisher: "Hating Cats 4 Us",
    pages: 9,
    issue: 420,
    isInPreSale: true,
  },
];

// const BookCollectionConnection = mongoose.model("book", BookSchema);
// const BookModel = mongoose.model("book", BookSchema);
const Book = mongoose.model("book", BookSchema);

// http protocol
// connecting to the local host
// at port 3000
// http://localhost:3000
// mongoose
//   .connect("mongodb://localhost:27017/books-nobody-care-about")
//   .then(() => {
//     console.log("NOW I AM CONNECTED TO THE DB");
//     BookModel.create({
//       author: "Tony",
//       issue: 32,
//       pages: 11680,
//       isInPreSale: false,
//       publisher: "Tonys Mom",
//       releaseDate: new Date(),
//       title: "Tony",
//     })
//       .then((createdBook) => {
//         console.log("createdBook:", createdBook);
//         BookModel.insertMany(listOfBooks)
//           .then((addedBooks) => {
//             console.log("addedBooks:", addedBooks);
//             console.log("ABOUT TO GET A LIST OF ALL OF THE BOOKS");
//             BookModel.find({})
//               .then((listOfAllBooks) => {
//                 console.log("listOfAllBoks:", listOfAllBooks);
//               })
//               .catch((err) => {
//                 console.log("err:", err);
//               });
//           })
//           .catch((err) => {
//             console.error("Oh oh, failed adding multiple", err);
//           });
//       })
//       .catch((err) => {
//         console.log("Oppsie, failed creating a book", err);
//       });
//   })
//   .catch((err) => {
//     console.log("Oopsie daisy, failed connecting to the database");
//   });

function promised() {
  return new Promise((resolve) => resolve(1));
}

const number = promised();
console.log("number:", number);

// number.then(() => {
// 	return 1
// }).then(() => {

// }).then()

mongoose
  .connect("mongodb://localhost:27017/books-nobody-care-about")
  .then(() => {
    return Book.insertMany(listOfBooks);
  })
  .then(() => {
    return Book.create({
      author: "Tony",
      issue: 32,
      pages: 11680,
      isInPreSale: false,
      publisher: "Tonys Mom",
      releaseDate: new Date(),
      title: "the title",
    }).catch((err) => {
      console.log("err:", err);
    });
  })
  .then((addedBooks) => {
    console.log("Added books: ", addedBooks);
    console.log("ABOUT TO GET A LIST OF ALL OF THE BOOKS");
    return Book.find({}); //
  })
  .then((listOfAllBooks) => {
    console.log("listOfAllBooks:", listOfAllBooks);
  })
  .catch((err) => {
    console.log("Oopsie something happened", err);
  });

// async function main() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/books-nobody-care-about");
//     console.log("connected");
//     const addedBooks = await Book.insertMany(listOfBooks);
//     console.log("ADDED MANY");

//     const createdBook = await Book.create({
//       author: "Tony",
//       issue: 32,
//       pages: 11680,
//       isInPreSale: false,
//       publisher: "Tonys Mom",
//       releaseDate: new Date(),
//       title: "",
//     });

//     console.log("added one", createdBook);
//     const allOurBooksInDb = await Book.find({});
//   } catch (error) {
//     console.log("error:", error);
//   }
// }

//   Promises can either Resolve or Reject.
// When they resolve, if defined, they call the `.then` method
// when they reject, if defined, they call the `.catch` method

// function returnsSomething() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "maxime", age: "no one knows. ", from: "NL" });
//     }, 500);
//   });
// }

// returnsSomething().then((aValue) => {
//   console.log("aValue:", aValue);
// });
