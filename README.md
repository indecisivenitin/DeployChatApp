# Real-Time Chat Application

A modern real-time chat application built with a React frontend and Node.js backend, featuring instant messaging, user authentication, and a responsive design.

## 🚀 Features

- Real-time messaging using WebSocket
- User authentication and authorization
- Responsive design with Tailwind CSS
- Modern UI/UX with Vite
- Message history and persistence
- Online/offline status indicators
- Typing indicators
- Message read receipts

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Socket.io-client
- React Router
- Context API for state management

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB
- JWT Authentication

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Kamal-singh-01/chat-app.git
cd chat-app
```

2. Install dependencies for both frontend and backend:
```bash
npm install
```

3. Set up environment variables:
   - Create `.env` file in the backend directory
   - Create `.env` file in the frontend directory
   - Add necessary environment variables (see Environment Variables section)

4. Start the development servers:

For backend:
```bash
npm run start
```

For frontend:
```bash
cd frontend
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## 🚀 Deployment

### Frontend (Netlify)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
4. Add environment variables in Netlify dashboard

### Backend
Deploy the backend to your preferred hosting service (Heroku, Railway, Render, etc.)
1. Set up environment variables
2. Configure CORS settings
3. Update frontend API URL

## 📱 Usage

1. Register a new account or login
2. Start chatting with other users
3. Use the sidebar to navigate between conversations
4. Send messages, images, and emojis
5. See typing indicators and read receipts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- Kamal Singh - Initial work

## 🙏 Acknowledgments

- Socket.io for real-time communication
- Tailwind CSS for styling
- Vite for the build tool
- All contributors and users of the application 