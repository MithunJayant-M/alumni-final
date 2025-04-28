# Alumni Connect

## Overview
Alumni Connect is a web application designed to help alumni stay connected with their peers, discover career opportunities, and engage with the community. The platform allows alumni to register, connect with others, and participate in discussions while providing admins with tools to manage alumni data and oversee community interactions.

## Features
### User Features:
- **Sign In / Sign Up**: Users can register and log in to access the platform.
- **Profile Management**: Users can update their profile information and profile photo.
- **Alumni Directory**: Browse and connect with fellow alumni.
- **Community Page**: Post, edit, delete, and pin messages.
- **Career Opportunities**: Discover job opportunities shared by other alumni.
- **Global Networking**: Connect with alumni from various locations.

### Admin Features:
- **Manage Alumni**: Add, edit, and delete alumni records.
- **User Role Management**: Change roles (Admin, Verified User, Unverified User).
- **Profile Security**: Update password and manage profile settings.
- **Community Management**: Oversee posts, delete inappropriate content, and pin important messages.
- **Alumni Location Management**: Maintain alumni location details.
- **Dashboard Access**: View analytics and alumni insights.

## Tech Stack
- **Frontend**: React.js, Vite, HTML, CSS, JavaScript, Lucide React for icons.
- **Backend**: Node.js, Express.js, MongoDB.
- **Authentication**: JWT-based authentication.
- **State Management**: Context API or Redux (if applicable).
- **API Calls**: Axios with interceptors for authentication.

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- Git

### Setup
#### 1. Clone the repository
```sh
git clone https://github.com/your-username/alumni-connect.git
cd alumni-connect
```

#### 2. Install dependencies
```sh
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

#### 3. Set up environment variables
Create a `.env` file in the backend directory and add the following:
```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```
Create a `.env` file in the frontend directory:
```env
VITE_local_URL=http://localhost:5000
VITE_PORT=3000
```

#### 4. Start the development server
```sh
# Start the backend
cd server
npm start

# Start the frontend
cd ../client
npm run dev
```

## Usage
- Visit `http://localhost:3000` to access the application.
- Sign up or log in to explore the alumni network.
- Admins can access the dashboard for user management.

## API Routes
### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Authenticate and retrieve token.

### Alumni Management (Admin)
- `GET /api/alumni` - Fetch all alumni.
- `POST /api/alumni` - Add a new alumni.
- `PUT /api/alumni/:id` - Update alumni details.
- `DELETE /api/alumni/:id` - Remove alumni.

### Community
- `GET /api/posts` - Retrieve community posts.
- `POST /api/posts` - Create a new post.
- `PUT /api/posts/:id` - Edit a post.
- `DELETE /api/posts/:id` - Delete a post.
- `PATCH /api/posts/:id/pin` - Pin a post.

## Deployment
### Frontend Deployment (Vercel/Netlify)
```sh
npm run build
```
Upload the `dist` folder to Vercel or Netlify.

### Backend Deployment (Render/Heroku)
```sh
git push heroku main
```

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-name`).
3. Commit changes (`git commit -m "Added feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, reach out via email: [jaimithun851@gmail.com].

