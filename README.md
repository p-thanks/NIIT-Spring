<div align="center">

# 🛒 E-Commerce Platform

### A Modern Full-Stack Shopping Experience

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0+-green.svg)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![H2 Database](https://img.shields.io/badge/H2-Database-orange.svg)](https://www.h2database.com/)
[![Java](https://img.shields.io/badge/Java-17+-red.svg)](https://www.oracle.com/java/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [API](#-api-endpoints) • [Contributing](#-contributing)

---

</div>

## 📸 Preview

```
┌─────────────────────────────────────────────────────────────┐
│                    🏪 E-Commerce Store                      │
├─────────────────────────────────────────────────────────────┤
│  🔍 Search    |  📦 Products  |  🛒 Cart  |  📋 Orders     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│   │  Product │  │  Product │  │  Product │  │  Product │ │
│   │  Image   │  │  Image   │  │  Image   │  │  Image   │ │
│   │          │  │          │  │          │  │          │ │
│   │  $99.99  │  │ $149.99  │  │  $79.99  │  │ $199.99  │ │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Frontend Features
- 🖼️ Modern responsive UI
- 🔍 Product search & filtering
- 🛒 Real-time shopping cart
- 📱 Mobile-friendly design
- ⚡ Fast page navigation
- 🎯 Category browsing

</td>
<td width="50%">

### ⚙️ Backend Features
- 📦 Product management
- 🗃️ H2 in-memory database
- 🔄 RESTful API design
- 📊 Order processing
- 🏷️ Category organization
- 💾 Data persistence options

</td>
</tr>
</table>

---

## 🏗️ Tech Stack

<div align="center">

### Backend
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![H2](https://img.shields.io/badge/H2-0000BB?style=for-the-badge&logo=database&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

</div>

---

## 🚀 Installation

### Prerequisites

```bash
☑️ Java 17 or higher
☑️ Node.js 16+ and npm
☑️ Maven 3.6+
☑️ Git
```

### 📦 Quick Start

#### 1️⃣ Clone Repository

```bash
git clone https://github.com/p-thanks/NIIT-Spring.git
cd NIIT-Spring
```

#### 2️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies and run
mvn clean install
mvn spring-boot:run
```

> 🌐 Backend runs on `http://localhost:8080`

#### 3️⃣ Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start development server
npm start
```

> 🌐 Frontend runs on `http://localhost:5173`

---

## 📂 Project Structure

```
ecommerce-app/
│
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 main/
│   │   │   ├── 📁 java/com/ecommerce/
│   │   │   │   ├── 📄 EcommerceApplication.java
│   │   │   │   ├── 📁 controller/
│   │   │   │   │   ├── ProductController.java
│   │   │   │   │   ├── CartController.java
│   │   │   │   │   └── OrderController.java
│   │   │   │   ├── 📁 model/
│   │   │   │   │   ├── Product.java
│   │   │   │   │   ├── Cart.java
│   │   │   │   │   └── Order.java
│   │   │   │   ├── 📁 repository/
│   │   │   │   │   ├── ProductRepository.java
│   │   │   │   │   ├── CartRepository.java
│   │   │   │   │   └── OrderRepository.java
│   │   │   │   └── 📁 service/
│   │   │   │       ├── ProductService.java
│   │   │   │       ├── CartService.java
│   │   │   │       └── OrderService.java
│   │   │   └── 📁 resources/
│   │   │       └── application.properties
│   │   └── 📁 test/
│   └── pom.xml
│
└── 📁 frontend/
    ├── 📁 public/
    │   └── index.html
    ├── 📁 src/
    │   ├── 📁 components/
    │   │   ├── ProductCard.jsx
    │   │   ├── Cart.jsx
    │   │   └── Navbar.jsx
    │   ├── 📁 pages/
    │   │   ├── Home.jsx
    │   │   ├── ProductDetails.jsx
    │   │   └── Checkout.jsx
    │   ├── 📁 services/
    │   │   └── api.js
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## 🔌 API Endpoints

### 📦 Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products/{id}` | Get product by ID |
| `POST` | `/api/products` | Create new product |
| `PUT` | `/api/products/{id}` | Update product |
| `DELETE` | `/api/products/{id}` | Delete product |
| `GET` | `/api/products/category/{category}` | Get products by category |

### 🛒 Cart

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/cart` | Get all cart items |
| `POST` | `/api/cart` | Add item to cart |
| `PUT` | `/api/cart/{id}` | Update cart item |
| `DELETE` | `/api/cart/{id}` | Remove from cart |
| `DELETE` | `/api/cart` | Clear entire cart |

### 📋 Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/orders` | Create new order |
| `GET` | `/api/orders` | Get all orders |
| `GET` | `/api/orders/{id}` | Get order by ID |

---

## 🗄️ Database

### H2 Console Access

```
🌐 URL: http://localhost:8080/h2-console

📊 JDBC URL: jdbc:h2:mem:ecommercedb
👤 Username: sa
🔑 Password: (leave empty)
```

### Configuration

```properties
# application.properties
spring.datasource.url=jdbc:h2:mem:ecommercedb
spring.datasource.driverClassName=org.h2.Driver
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8080
```

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
mvn test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Run All Tests
```bash
# Backend
mvn clean test

# Frontend
npm run test:coverage
```

---

## 🚢 Deployment

### Backend Deployment

```bash
# Build JAR file
mvn clean package

# Run JAR
java -jar target/ecommerce-backend-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment

```bash
# Create production build
npm run build

# Deploy build folder to hosting service
# (Netlify, Vercel, AWS S3, etc.)
```

---

## 🎯 Roadmap

- [ ] 🔐 User authentication & authorization
- [ ] 💳 Payment gateway integration
- [ ] ⭐ Product reviews & ratings
- [ ] ❤️ Wishlist functionality
- [ ] 📧 Email notifications
- [ ] 📊 Admin dashboard
- [ ] 🔍 Advanced search filters
- [ ] 📱 Progressive Web App (PWA)

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. 🍴 Fork the Project
2. 🌿 Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. ✍️ Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the Branch (`git push origin feature/AmazingFeature`)
5. 🔃 Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

<div align="center">

**Paul Thanksgiving** - [@PThanks01](https://x.com/PThanks01) - pthanksdev@gmail.com

**Project Link:**[Ecommerce](https://github.com/p-thanks/NIIT-Spring.git)

---

### ⭐ Star this repo if you like it!

Made with Pthanks and ☕

</div>

"# NIIT-Spring" 