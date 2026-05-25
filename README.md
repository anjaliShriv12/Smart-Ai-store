# 🛒 SmartStore AI - AI E-commerce Admin Assistant

SmartStore AI is an AI-powered e-commerce admin dashboard where store owners can manage products, generate AI content, and analyze sales insights with a modern UI.

---

## 🎯 Project Objective

Build a platform where store owners can:

- Manage products
- Generate AI descriptions using AI
- View analytics and sales insights
- Get AI recommendations for improving sales

---

## 🚀 Features

### 🔐 User Authentication
- User Signup
- User Login
- JWT Authentication
- Password hashing using bcrypt

---

### 📦 Product Management

- Add Products
- Edit Products
- Delete Products
- View Product List

---

### 🤖 AI Content Generation

Generate:

- Product descriptions
- SEO tags
- Marketing captions

---

### 📊 Analytics Dashboard

Dashboard includes:

- Revenue Analytics
- Top Products
- AI Suggestions
- Pricing Insights
- Trending Product Insights

---

### 🎨 UI Features

- Modern Dashboard UI
- Dark Theme
- Light Theme
- Responsive Sidebar
- 3D Card Effects
- Glassmorphism Design
- Gradient Effects

---

## 🧰 Tech Stack

### Frontend

- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Chart.js
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- JWT
- bcryptjs
- Gemini API / OpenAI API

---

## 📂 Project Structure

```bash
SmartStore-AI
│
├── backend
│   │
│   ├── models
│   │      Product.js
│   │      User.js
│   │
│   ├── routes
│   │      authRoutes.js
│   │      productRoutes.js
│   │      aiRoutes.js
│   │      analyticsRoutes.js
│   │      suggestionRoutes.js
│   │      insightRoutes.js
│   │
│   ├── utils
│   │      gemini.js
│   │
│   ├── .env
│   └── server.js
│
│
├── frontend
│   │
│   ├── src
│   │      ├── pages
│   │      │      Login.jsx
│   │      │      Signup.jsx
│   │      │      Dashboard.jsx
│   │      │      Products.jsx
│   │      │      Profile.jsx
│   │      │
│   │      ├── components
│   │      │      Sidebar.jsx
│   │      │      ProductCard.jsx
│   │      │      AnalyticsChart.jsx
│   │
│   └── App.jsx
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/smartstore-ai.git
```

---

### Install Backend Dependencies

```bash
cd backend

npm install
```

---

### Install Frontend Dependencies

```bash
cd frontend

npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside backend:

```env
MONGO_URL=your_mongodb_connection

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_api_key
```

---

## ▶️ Run Backend

```bash
cd backend

npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## ▶️ Run Frontend

```bash
cd frontend

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🔄 Application Flow

1. User Signup/Login

2. User adds products

3. AI generates:
   - Description
   - Tags
   - Marketing caption

4. Products get stored in MongoDB

5. Dashboard displays:
   - Revenue
   - Top products
   - AI suggestions
   - Analytics

---

## 📸 Screenshots

### Login Page

Professional Dark UI Login Screen

### Dashboard

- Revenue Cards
- AI Suggestions
- Analytics Charts
- Top Products

### Product Management

- Add/Edit/Delete Products
- AI Generated Content

---

## 🔮 Future Improvements

- Image Upload for Products
- Real Revenue Calculations
- AI Chat Assistant
- Inventory Alerts
- Sales Prediction
- Admin Profile Settings
- Notifications

---

## 👩‍💻 Author

Developed by:

**Anjali Shrivastava**

---

## ⭐ Thank You

SmartStore AI helps store owners manage products intelligently using AI.
