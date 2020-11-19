const fs = require("fs");

const localeFileDefault = "en_us.json";
const localeFileList = ["es_es.json", "zh_cn.json"];

fs.watchFile(localeFileDefault, function () {

    let localeDefault = readFile(localeFileDefault);
    let localeCurrent = null;
    let fileNameCurrent = null;
    let newPath = undefined;

    for (let i in localeFileList) {
        fileNameCurrent = localeFileList[i];

        console.log("Adding new keys from default locale to file " + fileNameCurrent);
        localeCurrent = readFile(fileNameCurrent);
        for (let key in localeDefault) {
            if (!localeCurrent[key]) {
                console.log(key + " key added.");
                localeCurrent[key] = localeDefault[key];
                console.log(`PATTTHHH1 ${newPath}`)
                newPath = `${fileNameCurrent}/${key}.json`;
                console.log(`PATTTHHH2 ${newPath}`)
            } else {
                newPath = `${fileNameCurrent}/${key}.json`;
                console.log(`PATTTHHfafafasfasH2 ${newPath}`)
            }
        }

        console.log("Removing keys not on default locale to file " + fileNameCurrent);
        for (let key in localeCurrent) {
            if (!localeDefault[key]) {
                console.log(key + " key removed.");
                delete localeCurrent[key];
                console.log(`PATTTHHH3 ${newPath}`)
                newPath = `${fileNameCurrent}/${key}.json`;
                console.log(`PATTTHHH4 ${newPath}`)
            } else {
                newPath = `${fileNameCurrent}/${key}.json`;
                console.log(`PATTTHHHfafsa2 ${newPath}`)
            }
        }

        // let newPath = `${fileNameCurrent}/${key}.json`;
        console.log(`NEW PATdddddH === ${newPath}`);

        writeNewFile(newPath, JSON.stringify(localeCurrent));
        console.log("File " + fileNameCurrent + " updated.");
    }

});

const readFile = fileName => {
    if (fs.existsSync(fileName)) {
        let result = fs.readFileSync(fileName, "utf8");
        result = result ? JSON.parse(result) : {};
        return result;
    }
    // writeFile(fileName, "{}");
    return null;
}


const writeNewFile = (fileName, content) => {
    fs.writeFile(fileName, content, err => {
        if (err) throw err;
    });
}


// const writeFile = (fileName, content) => {
//     fs.writeFileSync(fileName, content, "utf8");
// }