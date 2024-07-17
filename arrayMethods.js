// From Codecademy project 'Secret Message'. Useful array method examples to come back to 

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log('original secretMessage: ', secretMessage);
console.log('original secretMessage length: ', secretMessage.length);

secretMessage.pop();
console.log('new pop length: ', secretMessage.length);

secretMessage.push('to', 'Program');
console.log('push: ', secretMessage);

console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';
console.log('change index 7: ', secretMessage);

secretMessage.shift();
console.log('remove FIRST element of array: ', secretMessage);

secretMessage.unshift('Programming');
console.log('add to the BEGINNING of array: ', secretMessage);

secretMessage.splice(6, 5, 'know');
console.log('removes 5 words, replace with know: ', secretMessage);

console.log(secretMessage.join(' '));
