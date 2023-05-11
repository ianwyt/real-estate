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
