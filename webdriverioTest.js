let webdriverio = require('webdriverio');

let client = webdriverio.remote({
    port: 4723,
    logLevel: 'verbose',
    desiredCapabilities: {
        "platformName": "Android",
        "deviceName": "9c83590",
        "app": "/Users/zack-zhao/android-app/MyFirstApp/app/build/outputs/apk/app-debug.apk",
        "appPackage": "com.example.zack_zhao.myfirstapp"
    }
})

client
    .init()
    .pause(3000)
    .setValue("#editText","helloworld")
    .click("#button")
    .end().catch(function (e) {
        console.error(e.stack);
        return client.end();
    });


