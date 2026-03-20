const fs = require('fs');
const html = fs.readFileSync('demo2_real.html', 'utf8');
const regex = /<section\s+class="([^"]+)"/g;
let m;
let out = '';
while(m = regex.exec(html)) out += m[1] + '\n';
fs.writeFileSync('sections.txt', out);
