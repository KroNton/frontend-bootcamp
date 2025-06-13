// Simulated API using localStorage and setTimeout to mimic async behavior
class ChatAPI {
    static async sendMessage(message) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
                const newMessage = {
                    id: Date.now(),
                    text: message,
                    timestamp: new Date().toISOString()
                };
                messages.push(newMessage);
                localStorage.setItem('chatMessages', JSON.stringify(messages));

                // Dispatch event to notify about new message
                window.dispatchEvent(new CustomEvent('newMessage', { detail: newMessage }));

                resolve(newMessage);
            }, 300); // Simulate network delay
        });
    }

    static async getMessages() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
                resolve(messages);
            }, 200); // Simulate network delay
        });
    }
}

// Chat application class
class ChatApp {
    constructor() {
        this.messagesContainer = document.getElementById('messages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');

        this.initEventListeners();
        this.loadMessages();

        // Listen for new messages from other tabs/windows
        window.addEventListener('newMessage', (event) => {
            this.addMessageToUI(event.detail);
        });
    }

    initEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSendMessage();
        });
    }

    async handleSendMessage() {
        const messageText = this.messageInput.value.trim();
        if (!messageText) return;

        this.messageInput.value = '';

        try {
            await ChatAPI.sendMessage(messageText);
            // Message will be added to UI through the event listener
        } catch (error) {
            console.error('Failed to send message:', error);
            this.showError('Failed to send message. Please try again.');
        }
    }

    async loadMessages() {
        try {
            const messages = await ChatAPI.getMessages();
            this.displayMessages(messages);
        } catch (error) {
            console.error('Failed to load messages:', error);
            this.showError('Failed to load messages. Please refresh the page.');
        }
    }

    displayMessages(messages) {
        this.messagesContainer.innerHTML = '';
        messages.forEach(message => this.addMessageToUI(message));
    }

    addMessageToUI(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `
            <div class="message-text">${message.text}</div>
            <div class="message-time">${new Date(message.timestamp).toLocaleTimeString()}</div>
        `;
        this.messagesContainer.appendChild(messageElement);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    showError(message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'message error';
        errorElement.textContent = message;
        this.messagesContainer.appendChild(errorElement);
    }
}

// Initialize the chat application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatApp();
});