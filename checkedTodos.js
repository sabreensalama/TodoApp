var global_functions = require('./global_functions.js')

exports.checkToDo =function checkToDo(todo_id){
    const readingData = global_functions.readFile()
    readingData.forEach(function (arrayItem) {
      if (arrayItem.id == todo_id)
      {
        arrayItem.checked = "true"
        console.log("done")

      }
  });
  global_functions.writToFile(readingData)


  }

  exports.unCheckToDo =function unCheckToDo(todo_id){
    const readingData = global_functions.readFile()
    readingData.forEach(function (arrayItem) {
      if (arrayItem.id == todo_id)
      {
        arrayItem.checked = "false"
        console.log("done")

      }
  });
  global_functions.writToFile(readingData)


  }

