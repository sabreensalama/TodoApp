
const fs = require('fs')
const path = './data.json'

exports.writToFile = function writToFile(readingData){

    const  dataString = JSON.stringify(readingData);
    fs.writeFileSync(path , dataString)
    
  }
  
  exports.readFile = function readFile()
  {
       dataToArray =[]
       const fileData = fs.readFileSync(path,'utf8' );
       if (fileData != ""){
             dataToArray= JSON.parse(fileData)
       }
        return dataToArray

  }