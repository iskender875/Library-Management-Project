// src/components/layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const adminLinks = [
  { name: 'ড্যাশবোর্ড', path: '/admin/dashboard', icon: '🏠' },
  { name: 'বই পরিচালনা', path: '/admin/books', icon: '📚' },
  { name: 'সদস্য পরিচালনা', path: '/admin/members', icon: '👤' },
  { name: 'ইস্যু ও রিটার্ন', path: '/admin/issues', icon: '🔄' },
  { name: 'রিপোর্ট', path: '/admin/reports', icon: '📈' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    // ফিক্সড সাইডবার: বড় স্ক্রিনে স্থায়ী, ছোট স্ক্রিনে হাইড
    <div className="hidden lg:block fixed h-screen w-64 bg-gray-800 text-white p-4 shadow-xl z-20">
      <div className="py-4 border-b border-gray-700 mb-6">
        <h2 className="text-xl font-bold text-indigo-400">এডমিন প্যানেল</h2>
      </div>

      <nav className="space-y-2">
        {adminLinks.map((link) => {
          // বর্তমান Active লিঙ্ক চিহ্নিত করার জন্য
          const isActive = location.pathname === link.path;
          
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`
                flex items-center space-x-3 p-3 rounded-lg font-medium transition duration-150
                ${isActive
                  ? 'bg-indigo-600 text-white shadow-lg' // Active স্টাইল
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white' // Normal স্টাইল
                }
              `}
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* লগআউট বাটন (নিচে ফিক্সড) */}
      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={() => alert('Logout action')}
          className="flex items-center space-x-3 w-full p-3 rounded-lg text-red-300 hover:bg-gray-700 transition duration-150"
        >
          <span className="text-xl">🚪</span>
          <span>লগআউট</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;