'use strict';
const open = require('open');

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

// Opens the image in the default image viewer
(async () => {
	//await open('unicorn.png', {wait: true});
	//console.log('The image viewer app closed');

	// Opens the url in the default browser
  //await open('https://www.google.com');
	await open(process.argv[2]);

	// Specify the app to open in
	//await open('https://sindresorhus.com', {app: 'firefox'});

	// Specify app arguments
	//await open('https://sindresorhus.com', {app: ['google chrome', '--incognito']});
})();
