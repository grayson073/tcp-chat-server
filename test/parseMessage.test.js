const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('Messages', () => {

    it('Ignores strings that do not start with @ (null)', () => {
        const input = parseMessage('whatz up man?');
        assert.equal(input, null);
    });

    it('Handles @all option', () => {
        const input = parseMessage('@all hey everyone');
        const result = {
            cmd: 'all',
            arg: undefined,
            text: 'hey everyone'
        };
        assert.deepEqual(input, result);
    });

    it('Handles @nick option', () => {
        const input = parseMessage('@nick:Frank');
        const result = {
            cmd: 'nick',
            arg: 'Frank',
            text: ''
        };
        assert.deepEqual(input, result);
    });

    it('Handles @dm option', () => {
        const input = parseMessage('@dm:FrankPDX what up, Frank?');
        const result = {
            cmd: 'dm',
            arg: 'FrankPDX',
            text: 'what up, Frank?'
        };
        assert.deepEqual(input, result);

    });

});