const fs = require('fs');
const file = fs.readFileSync('src/kinvey.d.ts').toString();
fs.writeFileSync('dist/kinvey-angular2-sdk.d.ts', file);
