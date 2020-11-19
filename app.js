'use strict';

const fs = require('fs');

const currentLocale = 'pl_pl';
const fileToRead = `./translations/${currentLocale}.json`;
const newFilePath = `./api/${currentLocale}`;

fs.mkdir(newFilePath, { recursive: true }, (err) => {
    if (err) throw err;
});


fs.readFile(fileToRead, (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    console.log(`Data received - ${jsonData}`);

    for (let key in jsonData) {
        if (jsonData[key]) {
            console.log(`Writing - ${key} new file`)
            const fileName = `${newFilePath}/${key}.json`;
            fs.writeFileSync(fileName, jsonData[key]);
        } else {
            console.log(`Error - not able to write ${key} new file`)
        }
    }
});

console.log('Whoo hoo! 🥳');