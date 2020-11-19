'use strict';

const fs = require('fs');

fs.readFile('./languages/en_us.json', (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    console.log(jsonData);

    for (let key in jsonData) {
        if (jsonData[key]) {
            console.log(`Writing ${key} new file`)
            const fileName = `${key}.json`;
            fs.writeFileSync(fileName, jsonData[key]);
        } else {
            console.log(` Error - not able to write ${key} new file`)
        }
    }
});

console.log('This is after the read and write call :D ');