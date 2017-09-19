const fs = require('fs');
const file = JSON.parse(fs.readFileSync('package.json').toString());
delete file.devDependencies;
delete file.scripts;
fs.writeFileSync('dist/package.json', JSON.stringify(file, null, 2));
