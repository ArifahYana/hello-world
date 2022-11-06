//button in crud
const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')
let pathName = path.join(__dirname, 'Files')
//button create
btnCreate.addEventListener('click', function(){  //creating text file when user click CREATE button
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was created")    
    console.log("The file was created")
  })
})
//button update
btnUpdate.addEventListener('click', function(){  //creating text file when user click CREATE button
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was updated")    
    console.log("The file was updated")
  })
})
//button read
btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value)
  fs.readFile(file, function(err, data){ 
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    fileContents.value = data
    alert(txtfile + " text file was read")    
    console.log("The file was read!")
  })
})
//button delete
btnDelete.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
  fs.unlink(file, function(err){ 
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    fileName.value = ""
    fileContents.value = ""
    alert(txtfile + " text file was deleted")    
    console.log("The file was deleted!")
  })
})

