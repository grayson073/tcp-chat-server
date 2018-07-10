const net = require('net');
const Clients = require('./clients');
//

const clients = new Clients();

module.exports = net.createServer(client => {
    console.log('User connected.');
    client.setEncoding('utf8');
    clients.add(client);

    client.on('data', data => {
        console.log(client.username + ': ' + data);
        const message = client.username + ': ' + data;
        clients
            .getBroadCastClients(client)
            .forEach(c => c.write(message));
    });

    client.on('end', () => {
        console.log(client.username + ' disconnected.');
        const message = client.username + ' disconnected.';
        clients
            .getBroadCastClients(client)
            .forEach(c => c.write(message));

        clients.remove(client);
    });
});