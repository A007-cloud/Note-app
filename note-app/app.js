const chalk = require("chalk");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const notes = require("./notes");
const { describe, demandOption, required } = require("yargs");

const argv = yargs(hideBin(process.argv))
  .version("1.2.3")
  .command({
    command: "add",
    describe: "Add a new note!",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note Body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.addNotes(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note!",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.removeNotes(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "All notes listed.",
    handler() {
      notes.listNotes();
    },
  })
  .command({
    command: "read",
    describe: "showing single note.",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.readNotes(argv.title);
    },
  })
  .parse();
