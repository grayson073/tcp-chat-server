const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const clients = new ChatRoom();

module.exports = net.createServer(client => {
    console.log('User connected.');
    client.setEncoding('utf8');
    clients.add(client);
    client.write('CHAT CHAT CHAT CHAT CHAT');

    client.on('data', data => {
        const message = parseMessage(data);
        if(message.cmd === 'all') {
            clients
                .all(client)
                .forEach(c => c.write(`${client.username}: ${message.text}`));
        }
        else if(message.cmd === 'nick') {
            clients
                .rename(client.username, message.arg);
        }
        else if(message.cmd === 'dm') {
            clients
                .getClient(message.arg)
                .write(`${client.username}(private DM): ${message.text}`);
        }
    });

    client.on('end', () => {
        const message = client.username + ' disconnected.';
        clients
            .getBroadCastClients(client)
            .forEach(c => c.write(message));

        clients.remove(client);
    });
});