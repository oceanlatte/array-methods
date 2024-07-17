// From Codecademy project 'Secret Message'. Useful array method examples to come back to 

// using a let keyword so we can re-assign array if needed in project.
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log('original secretMessage: ', secretMessage);
console.log('original secretMessage length: ', secretMessage.length);

// pop method: removes the last item item in the array
secretMessage.pop();
console.log('new pop length: ', secretMessage.length);

// push method: adds entered values to the END of an array
secretMessage.push('to', 'Program');
console.log('push: ', secretMessage);

// prompt: replace the word easily to the word right.
// indexOf method: find the index of the entered value in the array
// used the result to access the correct index to replace 'easily' with 'right'.
console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';
console.log('change index 7: ', secretMessage);

// shift method: removes the FIRST element of an array
secretMessage.shift();
console.log('remove FIRST element of array: ', secretMessage);

// unshift method: adds the entered value to the BEGINNING of the array
secretMessage.unshift('Programming');
console.log('add to the BEGINNING of array: ', secretMessage);

//splice method (syntax): (which index to access, # of values to remove, value(s) to add)
// prompt: use an array method to remove the strings 'get', 'right', 'the', 'first', 'time'
// replace the removed values with string 'know'.
// access starting at index 6, remove 5 elements from array, add value of 'know'
secretMessage.splice(6, 5, 'know');
console.log('removes 5 words, replace with know: ', secretMessage);

// all of the methods listed change the original array (except indexOf and length, those return values)

console.log(secretMessage.join(' '));
