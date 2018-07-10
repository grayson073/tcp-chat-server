module.exports = class Clients {
    constructor() {
        this.set = new Set();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `User#${this.userNumber++}`;
        this.set.add(client);
    }

    getAllClients() {
        return [...this.set.values()];
    }

    remove(client) {
        this.set.delete(client);
    }

    getBroadCastClients(client) {
        return this.getAllClients().filter(user => user !== client);
    }
};