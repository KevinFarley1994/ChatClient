import { useState } from 'react';

interface Message {
  id: string;
  username: string;
  text: string;
  timestamp: Date;
}

function App() {
  const [messages] = useState<Message[]>([
    { id: '1', username: 'kevin', text: 'Welcome to my chatroom! Go Devils! 🏒', timestamp: new Date() },
    { id: '2', username: 'alice', text: 'Hey Kevin! Nice place!', timestamp: new Date() },
    { id: '3', username: 'bob', text: 'Love the red and black theme', timestamp: new Date() },
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
    <div className="fixed inset-0 bg-gradient-to-br from-red-600 via-black to-red-800 flex flex-col">
      {/* Header */}
      <div className="text-center p-4 bg-black/30">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Kevin's Chatroom
        </h1>
      </div>
      
      {/* Main content area with players and chat */}
      <div className="flex-1 flex justify-center items-stretch min-h-0">
        {/* Left Devils player */}
        <div className="hidden xl:block w-48 p-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/9/9f/New_Jersey_Devils_logo.svg" 
            alt="Devils Player Left" 
            className="opacity-50"
          />
        </div>
        
        {/* Chat container */}
        <div className="flex-1 max-w-4xl p-4 flex flex-col min-h-0">
          <div className="flex-1 bg-black/40 backdrop-blur-sm rounded-lg shadow-2xl flex flex-col min-h-0 border-2 border-red-500">
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-6 min-h-0">
              {messages.map((msg) => (
                <div key={msg.id} className="mb-4 hover:bg-black/20 rounded-lg p-2 transition-colors">
                  <span className="font-bold text-red-400">{msg.username}</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-white">{msg.text}</span>
                </div>
              ))}
            </div>
            
            {/* Input area - now should always be visible */}
            <div className="p-4 bg-black/60 border-t-2 border-red-500 rounded-b-lg">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2 rounded-full border-2 border-red-500 bg-black/40 text-white placeholder-gray-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/50 outline-none transition"
                onKeyDown={handleSendMessage}
              />
            </div>
          </div>
        </div>
        
        {/* Right Devils player */}
        <div className="hidden xl:block w-48 p-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/9/9f/New_Jersey_Devils_logo.svg" 
            alt="Devils Player Right" 
            className="opacity-50"
          />
        </div>
      </div>
    </div>
  );
}

export default App;