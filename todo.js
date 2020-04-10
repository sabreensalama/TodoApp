var addToFile = require('./crudFunctions')
var checkedFILE= require('./checkedTodos')
var editFile= require('./editTodo.js')
var deleteFile= require('./deleteTodo.js')
var listFile= require('./listTodo.js')

global.id 
global.id = 0 


function parsecmArgs(args){
    const [,,command , ...options ] = args
    const parsed_option = options.reduce((cum,el)=>{
        const [optionName , optionValue] = el.split("=")
        cum[optionName] = optionValue
        return cum

    },{})
    parsed_option.command = command
    // parsed_option.checked = checked
    if (parsed_option.checked == null)
    {
        parsed_option.checked = "false"
    }

    return parsed_option 

}




function main(cmdArgs){
    const parsed = parsecmArgs(cmdArgs)
    switch (parsed.command) {
        case "add":
            delete parsed.command
            addToFile.add(parsed)
            break;
        case "check":
            delete parsed.command
            delete parsed.title
            delete parsed.body
            addToFile.checkToDo(parsed.id)
            break;
        case "uncheck":
                delete parsed.command
                delete parsed.title
                delete parsed.body
                addToFile.unCheckToDo(parsed.id)
                break;
        case "edit":
            delete parsed.command
            editFile.editToDo(parsed)
            break
        case "delete":
                delete parsed.command
                deleteFile.deleteToDo(parsed)
                break
        case "list":
                delete parsed.command
                delete parsed.checked

                listFile.listAllToDo(parsed)
                break


            
           
      }

}
main(process.argv)