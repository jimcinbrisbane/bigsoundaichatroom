import Assistant from "./ai-assistant.js";
import Prompt from "./prompt.js";

const chatgptapikey = "your gpt api key"

export { Assistant };
export { Prompt };

const assistant = new Assistant(chatgptapikey);



import WebSocket, { WebSocketServer } from 'ws';

const server = new WebSocketServer({port: 5000, host: '192.168.50.162'});

const clients = new Set();

function broadcastMessage(message) {
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

server.on('connection', (socket) => {
  console.log('A client connected.');
  clients.add(socket);
  socket.on('message', async (message) =>
  {
    let info = JSON.parse(message.toString()); // Parse the received data into a JavaScript object
    console.log('Received message:', info);
    let newPrompt = new Prompt(info.message, [info.persona], [info.last]);
    let resp = await assistant.getResponse(newPrompt);
    broadcastMessage(JSON.stringify({ "role": info.role, "message": resp }));
  });

  socket.on('close', () => {
    console.log('A client disconnected.');
  });
});

console.log('WebSocket server is running on 192.168.112.162:5000');
