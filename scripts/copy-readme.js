const fs = require('fs');
const file = fs.readFileSync('README.md').toString();
fs.writeFileSync('dist/README.md', file);
