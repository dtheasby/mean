var  commonCapabilities = {
    'browserstack.local': "true",
    "browserstack.debug": "true",
    'browserstack.user': 'jadesudell1',
    'browserstack.key': 'jcA154enRuxnxfJriBd1',
    'build': 'service-booking'
  };
 var multiCapabilities = [
    {
      os: 'Windows',
      os_version: '10',
      browserName: 'IE',
      browser_version: '11.0',
      resolution: '1024x768',
      name: 'ie-test'
    },
    {
      browserName: 'Safari',
      browser_version: '9.1',
      os: 'OS X',
      os_version: 'El Capitan',
      name: 'safari-test'
    },
    {
      os: 'Windows',
      os_version: '10',
      browserName: 'Firefox',
      browser_version: '50.0',
      Resolution: '1024x768',
      name: 'firefox-test'
    },
    {
      os: 'Windows',
      os_version: '10',
      browserName: 'Chrome',
      browser_version: '54.0',
      resolution: '1024x768',
      name: 'chrome-test'
    },
    {
      platformName: 'iOS',
      platformVersion: '9.1',
      browserName: 'iPhone',
      app: 'safari',
      // platform: 'MAC',
      deviceName: 'iPhone 6S',
      'appium-version': "1.4.0",
      name: 'iphone-test'
    }

  ]



function test () {
    multiCapabilities.forEach(function (caps) {
        console.log(caps)
        for (var i in exports.config.commonCapabilities) {
            console.log(i);
            caps[i] = caps[i] || exports.config.commonCapabilities[i];
        }
    })
};

test();