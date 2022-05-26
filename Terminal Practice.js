// ls - list data within directory

// cd - move into something within current directory    cd .. - move back once
// cd / - move to core    cd ~  - move to home

//      / is absolute path

// pwd - show current location

// mkdir make a new directory / folder

// flags (-) - kinda like arguments, they modify commands 

// touch -filename-.-doctype to make a file inside current directory
// ie  touch CodePractice.js

// rm - used to remove a file
// is rm CodePractice.js

//rmdir will remove an EMPTY directory
//rm -rf   will remove a directory and everything in it


//                             JS NODE

// ctrl c twice to return to bash terminal

// node jsfile.js   - will run the js file in terminal

// const fs = require('fs')   - some objects need to be required to use

// npm i -package-   - installs package locally (will have a copy in .json dependencies)
// npm i -g -package-   - installs package globally

// npm link -package-   - connects to package globally in computer

// npm init   -will make a package.json to catalog packages
// npm init -y    -will skip questions

// npm install   -will look at local json and install all dependencies


//                 NODEMON

// nodemon is used to watch changes to a server and update it accordingly
// checks for a save

// nodemon -v     - shows current nodemon version

// nodemon index.js    - run the index using nodemon



const fs = require('fs');

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/indexedDB.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/styles.css`)
} catch (e) {
    console.log('Error detected');
    console.log(e);
}