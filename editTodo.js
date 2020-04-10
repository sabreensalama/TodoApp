var global_functions = require('./global_functions.js')

exports.editToDo =function editToDo(newTodo){
    const readingData = global_functions.readFile()
    readingData.forEach(function (arrayItem) {
      if (arrayItem.id == newTodo.id )
      {
        arrayItem.title = newTodo.title
        arrayItem.body = newTodo.body
        
        console.log("done")

      }
  });
  global_functions.writToFile(readingData)
  }