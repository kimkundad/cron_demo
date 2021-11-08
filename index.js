

const https = require('https');
const crypto = require("crypto");


var cron = require('node-cron');
cron.schedule('*/5 * * * *', function(){
   console.log('running a task every two minutes');

   var n = crypto.randomInt(0, 1000000);

   https.get('https://demo.xn--888-4nlyax.com/lotto-admin/action/yeekee_runtime_setup.php?v'+n, (res) => {
    let rawHtml = '';
    res.on('data', (chunk) => { rawHtml += chunk; });
    res.on('end', () => {
        try {
            console.log(rawHtml);
        } catch (e) {
            console.error(e.message);
        }
    });
});

    https.get('https://demo.xn--888-4nlyax.com/lotto-admin/action/yeekee_runtime.php?v'+n, (res) => {
    let rawHtmls = '';
    res.on('data', (chunk) => { rawHtmls += chunk; });
    res.on('end', () => {
        try {
            console.log('get : ',rawHtmls);
        } catch (e) {
            console.error(e.message);
        }
    });
});



https.get('https://demo.xn--888-4nlyax.com/lotto-admin/action/webservice_runtime.php?v'+n, (res) => {
    let rawHtml2 = '';
    res.on('data', (chunk) => { rawHtml2 += chunk; });
    res.on('end', () => {
        try {
            console.log('get : ',rawHtml2);
        } catch (e) {
            console.error(e.message);
        }
    });
});

});

