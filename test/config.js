exports.config = {
  baseUrl: 'https://trello.com/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'e2e/tests/home.spec.js',
    'e2e/tests/login.spec.js'
  ]
}
