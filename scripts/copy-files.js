const fs = require('fs');

// Copy kinvey.d.ts
const definitions = fs.readFileSync('src/kinvey.d.ts').toString();
fs.writeFileSync('dist/kinvey-angular2-sdk.d.ts', definitions);

// Copy package.json
const pkg = require('../package.json');
delete pkg.private;
delete pkg.devDependencies;
delete pkg.scripts;
fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));

// Copy README
const readme = fs.readFileSync('README.md').toString();
fs.writeFileSync('dist/README.md', readme);

// Copy LICENSE
const license = fs.readFileSync('LICENSE').toString();
fs.writeFileSync('dist/LICENSE', license);
