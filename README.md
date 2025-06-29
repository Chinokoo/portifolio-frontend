# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring dynamic content management and interactive UI components.

## 🚀 Features

- **Modern UI/UX**: Clean and responsive design with smooth animations
- **Interactive Components**: Dynamic carousels and tech stack displays

- **Admin Dashboard**: Complete CMS for managing:
  - Projects
  - Experience
  - Education
  - Contact Information
- **Authentication**: Secure admin access with login/register functionality
- **Responsive Design**: Fully responsive across all devices

## 🛠️ Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Custom CSS with modern design principles
- **Authentication**: JWT-based auth system
- **State Management**: Custom store implementation
- **Animations**: Motion for smooth transitions
- **Version Control**: Git

## 📦 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Main page components
│   ├── context/       # React context providers
│   ├── store/         # State management
│   └── config/        # Configuration files
├── public/
│   ├── images/        # Static images
│   ├── models/        # 3D models
│   └── fonts/         # Custom fonts
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## 🔑 Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_API_URL=your_backend_api_url
```

## 🔒 Admin Access

To access the admin dashboard:

1. Navigate to `/login`
2. Use your admin credentials
3. Manage your portfolio content through the intuitive dashboard

## 📱 Deployment

This project is configured for deployment on Vercel, as indicated by the `vercel.json` configuration file.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue.
