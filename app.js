const notes = require('./notes')
const yargs = require('yargs')

yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'The note\'s title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'The note\'s body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
})

yargs.command({
  command: 'remove',
  describe: 'Removes a new note',
  builder: {
    title: {
      describe: 'Title of the note to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  },
})

yargs.command({
  command: 'read',
  describe: 'Reads a note',
  builder: {
    title: {
      describe: 'Title of the note to read',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title)
  },
})

yargs.command({
  command: 'list',
  describe: 'Lists out all notes',
  handler: () => {
    notes.listNotes()
  },
})

yargs.command({
  command: 'clear',
  describe: 'Clears all notes',
  handler: () => {
    notes.clearNotes()
  },
})

yargs.parse()
