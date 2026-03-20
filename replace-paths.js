const fs = require('fs');
let css = fs.readFileSync('src/styles/dark-scoped.css', 'utf8');
css = css.replace(/\.\.\/img\//g, '/images/');
fs.writeFileSync('src/styles/dark-scoped.css', css);
console.log('Images replaced!');
