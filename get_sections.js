const fs = require('fs');
const html = fs.readFileSync('demo2_real.html', 'utf8');
const regex = /<section\s+class="([^"]+)"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[1]);
}
