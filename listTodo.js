var global_functions = require('./global_functions.js')

exports.listAllToDo =function listAllToDo(item){
    const readingData = global_functions.readFile()
    switch ( item.value){
        case "all":
                    readingData.forEach(function (arrayItem) 
                    {
                    console.log(arrayItem)
                    });
                    break
        case "checked":
            readingData.forEach(function (arrayItem) 
            {
                if (arrayItem.checked == "true"){
                    console.log(arrayItem)

                }
            });
            break
        case "unchecked":
            readingData.forEach(function (arrayItem) 
            {
                if (arrayItem.checked == "false"){
                    console.log(arrayItem)

                }
            });
            break
        default:
            console.log("un specified selection")


}
  }