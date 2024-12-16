import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Chat Interface', () => {
  test('renders essential UI elements', () => {
    render(<App />);
    
    // Check main structural elements
    expect(screen.getByText("Welcome to Kevin's Chatroom")).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
  });

  test('displays messages with correct format', () => {
    render(<App />);
    
    // Check first message format
    const welcomeMessage = screen.getByText('Welcome to my chatroom! Go Devils! 🏒');
    const messageContainer = welcomeMessage.parentElement;
    
    expect(messageContainer).toBeInTheDocument();
    expect(messageContainer?.querySelector('.text-red-400')).toHaveTextContent('kevin');
  });

  test('handles user input', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Type your message...');
    
    // Test typing
    await userEvent.type(input, 'Hello everyone');
    expect(input).toHaveValue('Hello everyone');
    
    // Test Enter key
    await userEvent.type(input, '{enter}');
    expect(input).toHaveValue(''); // Should clear after Enter
  });

  test('player images only show on large screens', () => {
    render(<App />);
    
    const leftPlayer = screen.getByAltText('Devils Player Left');
    const rightPlayer = screen.getByAltText('Devils Player Right');
    
    // Should have the hidden class for small screens
    expect(leftPlayer.parentElement).toHaveClass('hidden');
    expect(rightPlayer.parentElement).toHaveClass('hidden');
    // Should also have the xl:block class for large screens
    expect(leftPlayer.parentElement).toHaveClass('xl:block');
    expect(rightPlayer.parentElement).toHaveClass('xl:block');
  });
});