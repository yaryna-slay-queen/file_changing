const fs = require('fs');

const data = fs.readFileSync(
    '1.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);
console.log(data.replaceAll(" ", "(Yaryna Roguzhynska)"));