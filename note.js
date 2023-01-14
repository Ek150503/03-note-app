const fs = require("fs");
const chalk = require("chalk");

// Loading all the existing notes
const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Save the notes
const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

//  Add new note
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bgGreen.white("Added notes"));
  } else {
    console.log(chalk.bgRed.white("Note title taken!!"));
  }
};

// get Notes
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green.inverse(`-----${note.title}-----`));
    console.log(note.body);
  } else {
    console.log(chalk.bgRed("No Note Found"));
  }
};

// list notes
const listNotes = () => {
  console.log(chalk.green("------Your notes------"));
  loadNotes().forEach((note, index) => {
    console.log(`${index + 1} - ${note.title}`);
  });
};

// remove note
const removeNote = (title) => {
  const notes = loadNotes();

  const deleteNote = notes.find((note) => note.title == title);
  console.log(deleteNote);

  if (deleteNote) {
    const newNotes = notes.filter((note) => note.title != title);
    saveNotes(newNotes);

    console.log(chalk.bgGreen.white("Removed notes"));
  } else {
    console.log(chalk.bgYellow.white("No Note with title: " + title));
  }
};

module.exports = {
  addNote,
  readNote,
  removeNote,
  listNotes,
};
