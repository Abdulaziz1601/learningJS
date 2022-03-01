// File System
import fs from 'fs';
import path from 'path';

import {
	fileURLToPath
} from 'url';
import {
	dirname
} from 'path';

const __filename = fileURLToPath(
	import.meta.url);
const __dirname = dirname(__filename);

// Asyncronous method, do NOT block the program
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) {
//         throw err;
//     }

//     console.log('Folder is created');

// });


const filePath = path.join(__dirname, 'test', 'text.txt');

console.log(filePath); //c:\Users\abdulaziz\Desktop\nodeJS\test\text.txt

// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
//     if(err) throw err;

//     console.log('File is Created');
// });
// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
// 	if (err) throw err;

// 	console.log('File is Created');

// 	fs.writeFile(filePath, '\nHello Again ;)', (err) => { // File is overwritten with this context
// 		if (err) throw err;
// 		console.log('File is Created');
// 	});

// });

// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
// 	if (err) throw err;

// 	console.log('File is Created');

// 	fs.appendFile(filePath, '\nHello Again ;)', (err) => { // File is appended with this context
// 		if (err) throw err;
// 		console.log('File is Created');
// 	});

// });

// Reading Files

fs.readFile(filePath, 'utf-8',  (err, content) => {
	if(err) throw err;

	console.log(content);


	// const data = Buffer.from(content);

	// console.log('Content: ', data.toString());
});	