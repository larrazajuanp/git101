const hobbies = ['leer libros', 'cocinar', 'jugar con mis perros'];

hobbies.forEach(hobbie => {
  console.log(hobbie);
});

const fileS = require('fs');

fileS.writeFile('newfile.txt', 'placeholder', function (err) {
  if (err) throw err;
  console.log('File is created succesfully');
});


const add = (value1, value2) => value1 + value2;
const sub = (value1, value2) => value1 - value2;
const mul = (value1, value2) => value1 * value2;
const div = (value1, value2) => value1 / value2;





//Clase Node 20 / 04
/*const coolImages = require("cool-images");
const moment = require("moment");
const fs = require("fs");
const image = coolImages.one();
const time = moment().format("YYYY/MM/DD hh:mm:ss");
console.log(image);

const imageList = coolImages.many(600, 800, 10);
imageList.forEach((image) => {
  console.log(image);
});

fs.readFile("log.txt", "UTF-8", (e, data) => {
  fs.appendFile("log.txt", `${time}\n`, (err) => {
    if (err) throw err;
  });
  imageList.forEach((img) => {
    console.log(img);
    console.log("data", data);
    fs.appendFile("log.txt", `${img}\n`, (err) => {
      if (err) throw err;
    });
  });
});*/




