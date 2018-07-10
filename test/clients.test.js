const assert = require('assert');
const Clients = require('../lib/clients');


describe('Clients', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let clients = null;
    beforeEach(() => {
        clients = new Clients();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);
    });

    it('Stores clients', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    it('Removes a client', () => {
        clients.remove(c2);
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c3]);
    });

});