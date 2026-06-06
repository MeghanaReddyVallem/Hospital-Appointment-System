# 🏥 Smart Hospital Appointment System (MERN Stack)

A full-stack Hospital Appointment Management System built using the **MERN stack** that enables patients to book appointments with doctors and allows administrators to manage doctors and appointments efficiently.

---

## 🚀 Live Features

### 👨‍⚕️ Patient Portal
- Patient Registration & Login  
- View list of available doctors  
- Book appointments (Doctor, Date, Time, Problem)  
- View appointment status (Pending / Approved / Rejected / Consulted)  
- View personal appointment history  

---

### 🏥 Admin Portal
- Admin Registration & Login  
- Add / Delete Doctors  
- Manage Appointments  
- Approve Appointment  
- Reject Appointment  
- Mark as Consulted  
- View complete appointment history  
- Track patient & doctor interaction details  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- React Router DOM  
- Axios  
- HTML, CSS, JavaScript  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  
- Mongoose  

### Other Tools
- REST APIs  
- LocalStorage (Session handling)  
- Nodemon  

---

## 📁 Project Structure

```text id="hsp_structure"
Hospital_Appointment/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/hospital-appointment-system.git
cd hospital-appointment-system
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔄 System Flow

- Patient → Register/Login → Book Appointment → Stored in MongoDB  
- Admin → Login → Manage Doctors → Approve/Reject Appointments  
- Patient → Views Updated Status  

---

## 📊 Key Features

- Role-based system (Patient & Admin)  
- Real-time appointment status update  
- Centralized hospital management  
- REST API integration  
- Full CRUD operations  
- Clean UI dashboard system  

---

## 📌 Future Improvements

- JWT Authentication (Security upgrade)  
- Email notifications for appointments  
- Payment gateway integration  
- Video consultation feature  
- Mobile responsive UI improvements  
- AI-based symptom checker  

---

## ⭐ Project Highlights

- ✔ MERN Stack Full Project  
- ✔ Real-world Healthcare System  
- ✔ Professional Admin Dashboard  
- ✔ Scalable Architecture  
- ✔ Beginner to Intermediate Friendly  
