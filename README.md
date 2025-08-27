# 📚 Book Bazaar – A Peer-to-Peer Book Exchange Platform

Book Bazaar is a **full-stack MERN (MongoDB, Express.js, React.js, Node.js)** project that allows students and book lovers to **buy, sell, and exchange second-hand books** at minimal cost.  
The platform provides authentication, book listings, search & filter functionality, wishlist, and a messaging system for buyer-seller interaction.

---

##  Features

###  Authentication
- User registration & login with **JWT authentication**  
- Passwords stored securely with **bcrypt hashing**  
- Session maintained using **localStorage**

###  Book Listings
- Authenticated users can **add, edit, and delete book listings**  
- Each book has details: **title, author, genre, condition, price, optional image**  
- Listings displayed on homepage with search & filter options

###  Search & Filter
- Search books by **title, author, or genre**  
- Filter books by **genre, condition, or price range**

###  Wishlist
- Logged-in users can **add books to wishlist**  
- Wishlist persists across sessions via **MongoDB**  
- Accessible in user profile

###  Messaging
- Buyers and sellers can **chat in real-time** about a book  
- Messages are stored with chat history

### Admin Dashboard
- Admins can **moderate books and users**  
- View analytics (total users, books, messages, etc.)

---

##  Tech Stack

**Frontend:**  
- React.js  
- TailwindCSS  
- Context API (Auth state management)  
- Axios  

**Backend:**  
- Node.js  
- Express.js  
- JWT Authentication  
- bcrypt for password hashing  

**Database:**  
- MongoDB (Mongoose ODM)  

**Deployment:**  
- Frontend → Vercel  
- Backend → Render / AWS EC2  
- Documentation → JSDoc + Vercel  

---


