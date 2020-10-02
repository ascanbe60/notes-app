const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    })
  
    saveNotes(notes)
    console.log(chalk.green(`Note ${title} added!`));
  } else {
    console.log(chalk.red('Note title aleady exists!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => {
    return note.title !== title
  })

  if (notes.length > notesToKeep.length)
  {
    console.log(chalk.green(`Note ${title} removed!`))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red('No note removed!'));
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const noteToRead = notes.find((note) => note.title === title)
  if (noteToRead) {
    console.log(chalk.green(noteToRead.title + ' - ' + noteToRead.body))
  } else {
    console.log(chalk.red('Note note found!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  if (notes.length) {
    notes.forEach((note) => {
      console.log(chalk.green(note.title + ' - ' + note.body))
    })
  } else {
    console.log(chalk.red('No notes!'))
  }
}

const clearNotes = () => {
  const notes = loadNotes()

  if (notes.length) {
    saveNotes([])
    console.log(chalk.green('Cleared all notes!'))
  } else {
    console.log(chalk.red('No notes to clear!'))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
  listNotes: listNotes,
  clearNotes: clearNotes,
}
