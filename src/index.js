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

    let ans = '';

    let words = expr.split('**********');
    let letter = '';

    for (let i = 0; i < words.length; i++) {
        let word = '';
        for (let j = 0; j < words[i].length; j += 10) {
            letter = '';
            for (let cur = j; cur - j < 10; cur += 2) { 
                if (words[i][cur] == '1') {
                    if (words[i][cur + 1] == '1')
                        letter += '-';
                    else
                        letter += '.';
                }
            }
            word += MORSE_TABLE[letter];
        }
        ans += word + ' ';
    }

    return ans.trim();
}

module.exports = {
    decode
}