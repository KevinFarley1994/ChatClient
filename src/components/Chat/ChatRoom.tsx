interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

function ChatRoom() {
  // This will be replaced with real data later
  const mockMessages: Message[] = [
    {
      id: '1',
      text: 'Hello there!',
      sender: 'Alice',
      timestamp: new Date()
    },
    {
      id: '2',
      text: 'Hi Alice!',
      sender: 'Bob',
      timestamp: new Date()
    }
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        {mockMessages.map(message => (
          <div key={message.id} className="mb-4">
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 border rounded"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              console.log('Message sent (not really)');
            }
          }}
        />
      </div>
    </div>
  );
}

export default ChatRoom;
