
var global_functions = require('./global_functions.js')




exports.add= function add(args){

    const readingData = global_functions.readFile()
    args.id =readingData.length
    readingData.push(args)
    global_functions.writToFile(readingData)


  }



 