const { decrypt } = require('./crypto');

const hash = {
  iv: '',
  content: '',
};
const text = decrypt(hash);

console.log(text); // Hello World!
