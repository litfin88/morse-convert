# Morse Alphabet Converter

You can encode, decode and hash with sha 256 by this package. You can use this also for user authentication.

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install morse-convert.

```bash
npm i morse-convert
```

## Usage

```javascript
const morse = require("morse-convert");

console.log(morse.valueToMorse("test message", String, false));
// Converting text to morse alphabet with string type.
// Output: - . ... -   -- . ... ... .- --. .

console.log(morse.valueToMorse("test message", Array, false));
// Converting text to morse alphabet with array type.
// Output: [ '- . ... -', '-- . ... ... .- --. .' ]

console.log(morse.valueToMorse("test message", String, true));
// Hashed value with morse alphabet.
// Output: b2833863f484c2386b3c13079a63fbb62d92780e394491403347e8aff312ffae

console.log(morse.morseToValue("- . ... -   -- . ... ... .- --. .", String, false));
// Converting morse to text with string type.
// Output: test message

console.log(morse.morseToValue("- . ... -   -- . ... ... .- --. .", Array, false));
// Converting morse to text with array type.
// Output: [ 'test', 'message' ]

console.log(morse.morseToValue("- . ... -   -- . ... ... .- --. .", Array, true));
// Hashed value with text.
// 190b5c60d1dcf5e362f996d9bdbc522a4c1feb92ce01b4c7ac4fad967b45ce97
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
