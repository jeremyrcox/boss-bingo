const fs = require('fs');
const path = require('path');

const pug = require('pug');

const config = require('../../config');

const compiledFunction = pug.compileFile('index.pug');
const renderSettings = {
  hasAnalytics: fs.existsSync('./analytics.js') && fs.statSync('./analytics.js').size,
  title: config.public.title
}

fs.writeFile('../../dist/index.html', compiledFunction(renderSettings), (err) => {
  if (err) throw err;
  console.log(`index.html written to ${path.resolve('../../dist/index.html')}`);
});
