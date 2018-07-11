module.exports = function parseMessage(input) {
    let option = {};
    if(input[0] !== '@') return null;
    else {
        const words = input.split(' ');
        const argument = words[0].split(':');
        option.cmd = argument[0].slice(1);
        option.arg = argument[1];
        option.text = words.slice(1).join(' ');
        return option;
    }
};