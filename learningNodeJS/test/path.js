import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log('File Name: ', path.basename(__filename));

// console.log("Directory Name: ", path.dirname(__filename));

// console.log("File Extension: ", path.extname(__filename));

// console.log('Parse: ', path.parse(__filename));
// console.log('Parse: ', path.parse(__filename).name);

console.log(path.join(__dirname, 'server', 'index.html'));
