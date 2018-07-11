module.exports = function parseMessage(input) {
    if(input[0] !== '@') return null;
    let option = {};
    const words = input.split(' ');
    const argument = words[0].split(':');
    option.cmd = argument[0].slice(1);
    option.arg = argument[1];
    option.text = words.slice(1).join(' ');
    return option;
};