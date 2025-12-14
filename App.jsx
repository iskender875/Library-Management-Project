// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

// Page Components
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Admin/Dashboard';
import ManageBooks from './pages/Admin/ManageBooks';
import BookCatalog from './pages/Public/BookCatalog';
import ManageMembers from './pages/Admin/ManageMembers'; // নতুন যোগ

// Admin Layout
const AdminLayout = ({ children }) => (
  <div className="flex min-h-screen">
    <Sidebar /> 
    <div className="flex-1 lg:ml-64 p-4 lg:p-8 w-full"> 
      {/* ছোট স্ক্রিনের জন্য Navbar (যদি আপনি সব পেজে একটিই Navbar চান) */}
      <div className="lg:hidden"> 
        <Navbar />
      </div>
      <main className="mt-4">{children}</main>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* পাবলিক রুটস */}
        <Route path="/" element={<NavbarWrapper><Home /></NavbarWrapper>} />
        <Route path="/login" element={<NavbarWrapper><Login /></NavbarWrapper>} />
        <Route path="/catalog" element={<NavbarWrapper><BookCatalog /></NavbarWrapper>} />

        {/* অ্যাডমিন রুটস (Protected Routes) */}
        <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/books" element={<AdminLayout><ManageBooks /></AdminLayout>} />
        <Route path="/admin/members" element={<AdminLayout><ManageMembers /></AdminLayout>} />
        {/* অন্যান্য অ্যাডমিন পেজ */}
      </Routes>
    </BrowserRouter>
  );
}

// পাবলিক পেজগুলোর জন্য একটি র‍্যাপার
const NavbarWrapper = ({ children }) => (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">{children}</div>
    </>
);

export default App;