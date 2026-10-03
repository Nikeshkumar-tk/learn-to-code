// @entry
// Run:  node examples/05-one-file-to-many/after/main.js
//
// AFTER: the ENTRY POINT. It wires the pieces together and reads like a summary.
// Same output as before.js — the behaviour didn't change, only the organisation.
import { addBook, markRead, listBooks } from "./books.js";
import { formatBook } from "./format.js";

addBook({ title: "Eloquent JavaScript", year: 2018 });
addBook({ title: "The Pragmatic Programmer", year: 1999 });
markRead(2);
listBooks().forEach((b) => console.log(formatBook(b)));
