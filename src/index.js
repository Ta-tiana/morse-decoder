const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newKey;

    for (let key in MORSE_TABLE) {
        let value = MORSE_TABLE[key];

        newKey = key.replace(/\./g, 10).replace(/-/g, 11);

        if (newKey.length < 10) {
            let countNull = 10 - newKey.length;//add nulls to keys which less than 10
            newKey = "0".repeat(countNull) + newKey;
        }
        MORSE_TABLE[newKey] = value;
    }

    let mas = expr.match(/.{1,10}/g); // split string EXPR to parts by 10 symbols, g -global split not once but whole string
    let result = '';

    a:  for (let m of mas) {
        for (let o in MORSE_TABLE) {
            if (o === m) {
                result += MORSE_TABLE[o];
            }

            if (m === '**********') { // if in EXPR exists '**********' than push spacebar
                result += ' ';
                continue a;
            }
        }
    }
    return result;
}

module.exports = {
    decode
};
