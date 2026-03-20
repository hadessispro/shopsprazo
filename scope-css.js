const fs = require('fs');
const code = fs.readFileSync('src/styles/dark.css', 'utf8');

// Simplified scoping:
// We just add .dark before every body element in the CSS and replace "body" with ".dark" or ".dark body"
// But better yet, since it's just CSS, we can use a PostCSS approach or a simple Regex.
// A safe regex for scoping this specific file:
let scoped = code.replace(/(^|})\s*([^{}]+)\s*\{/g, (match, prefix, selectors) => {
    if (selectors.trim().startsWith('@')) return match;
    const newSelectors = selectors.split(',').map(s => {
        let trimmed = s.trim();
        if (!trimmed) return s;
        if (trimmed === 'body') return '.dark';
        if (trimmed.startsWith('.dark')) return trimmed;
        return '.dark ' + trimmed;
    }).join(', ');
    return prefix + '\n' + newSelectors + ' {';
});

fs.writeFileSync('src/styles/dark-scoped.css', scoped);
console.log('done');
