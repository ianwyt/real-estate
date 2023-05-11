exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['authentication.spec.ts'],
    capabilities: {
      browserName: 'chrome',
    },
    onPrepare: () => {
      require('ts-node').register({
        project: 'e2e/tsconfig.e2e.json',
      });
    },
    baseUrl: 'http://localhost:4200/', // replace with your application's base URL
    framework: 'jasmine',
  };
  
[HH:mm:ss] I/launcher - Running 1 instances of WebDriver
[HH:mm:ss] I/direct - Using ChromeDriver directly...
[HH:mm:ss] I/hosted - Using the selenium server at http://localhost:4444/wd/hub

Started
....


Authentication Test Suite
  ✓ Register a new user
  ✓ Login with a valid email and password
  ✓ Login with an invalid email or password
  ✓ Sign in with Google

Executed 4 of 4 specs SUCCESS in 0.039 sec.
[HH:mm:ss] I/launcher - 0 instance(s) of WebDriver still running
[HH:mm:ss] I/launcher - chrome #01 passed
