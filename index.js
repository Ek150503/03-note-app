const yargs = require("yargs");
const { addNote, removeNote, listNotes, readNote } = require("./note");

/*
TODO: 
 - Create add Command line
 - Remove note
 - List all notes
 - Read Note

*/

// Customize yargs version
yargs.version("1.1.0");

yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "List all notes",
  handler() {
    listNotes();
  },
});

yargs.command({
  command: "read",
  description: "Read a note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title }) {
    readNote(title);
  },
});

yargs.parse();
