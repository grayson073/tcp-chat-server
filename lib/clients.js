


module.exports = class Clients {
    constructor() {
        this.set = new Set();
    }

    add(client) {
        this.set.add(client);
    }

    getAllClients() {
        return [...this.set.values()];
    }

    remove(client) {
        this.set.delete(client);
    }
};