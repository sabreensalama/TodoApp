var global_functions = require('./global_functions.js')

exports.deleteToDo =function deleteToDo(deletedTodo){
    const readingData = global_functions.readFile()
    readingData.forEach(function (arrayItem) {
      if (arrayItem.id == deletedTodo.id )
      {
        readingData.splice(arrayItem.id,deletedTodo.id)

        
        console.log("done")

      }
  });
  global_functions.writToFile(readingData)
  }