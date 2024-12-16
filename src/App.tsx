import { useState } from 'react';

interface Message {
  id: string;
  username: string;
  text: string;
  timestamp: Date;
}

function App() {
  const [messages] = useState<Message[]>([
    { id: '1', username: 'kevin', text: 'Welcome to my chatroom!', timestamp: new Date() },
    { id: '2', username: 'alice', text: 'Hey, cool place!', timestamp: new Date() },
    { id: '3', username: 'bob', text: 'Love the retro vibes here', timestamp: new Date() },
    { id: '4', username: 'charlie', text: 'Is anyone here into programming?', timestamp: new Date() },
    { id: '5', username: 'kevin', text: 'Yeah! We can talk about React!', timestamp: new Date() },
    // Test messages
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `${i + 6}`,
      username: 'test',
      text: `Test message ${i + 1}`,
      timestamp: new Date()
    }))
  ]);

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Message sent (to be implemented)');
      (e.target as HTMLInputElement).value = '';
    }
  };

  return (
    // Safe area that prevents content from being hidden under mobile browser chrome
    <div className="fixed inset-0 bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white text-center p-4">
        Welcome to Kevin's Chatroom
      </h1>
      
      {/* Main container */}
      <div className="flex-1 mx-auto w-full max-w-4xl px-4 pb-4 flex flex-col min-h-0">
        <div className="bg-white rounded-lg shadow-2xl flex-1 flex flex-col min-h-0">
          {/* Scrollable messages area */}
          <div className="flex-1 overflow-y-auto p-6 min-h-0">
            {messages.map((msg) => (
              <div key={msg.id} className="mb-4">
                <span className="font-bold text-blue-600">{msg.username}</span>
                <span className="text-gray-600">: </span>
                <span className="text-gray-800">{msg.text}</span>
              </div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="p-4 bg-white border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              onKeyDown={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;