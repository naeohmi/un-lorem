'use strict';

const fs = require('fs');

const currentLocale = 'zh_cn';
const fileToRead = `./translations/${currentLocale}.json`;

let newFilePath = `./api/${currentLocale}`;
console.log('test')
fs.mkdir(newFilePath, { recursive: true }, (err) => {
    if (err) throw err;
});


fs.readFile(fileToRead, (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    console.log(jsonData);

    for (let key in jsonData) {
        if (jsonData[key]) {
            console.log(`Writing ${key} new file`)
            const fileName = `${newFilePath}/${key}.json`;
            fs.writeFileSync(fileName, jsonData[key]);
        } else {
            console.log(` Error - not able to write ${key} new file`)
        }
    }
});

console.log('This is after the read and write call :D ');