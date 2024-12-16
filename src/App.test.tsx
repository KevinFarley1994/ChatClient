import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Chat App Basic Functionality', () => {
  test('renders main chat components', () => {
    render(<App />);
    
    // Check essential UI elements exist
    expect(screen.getByText("Welcome to Kevin's Chatroom")).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
  });

  test('messages display with correct structure', () => {
    render(<App />);
    
    // Look for first message which we know is consistent
    const firstMessage = screen.getByText('Welcome to my chatroom!');
    expect(firstMessage).toBeInTheDocument();
    
    // Get the message container and verify its structure
    const messageContainer = firstMessage.parentElement;
    expect(messageContainer).toBeInTheDocument();
    expect(messageContainer?.querySelector('.text-blue-600')).toHaveTextContent('kevin');
  });

  test('input field accepts user input', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Type your message...');
    
    await userEvent.type(input, 'Hello world');
    expect(input).toHaveValue('Hello world');
  });
});