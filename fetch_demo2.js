const https = require('https');
const fs = require('fs');

https.get('https://maraviyainfotech.com/projects/sprazo-html/sprazo-html/demo-2.html', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        fs.writeFileSync('demo2_real.html', rawData);
        console.log("Saved demo2_real.html! size:", rawData.length, "bytes.");
    });
}).on('error', (e) => {
    console.error(e);
});
