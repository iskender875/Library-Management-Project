// src/pages/Login.jsx

import React from 'react';
// খেয়াল রাখবেন, এখানে শুধু React ইম্পোর্ট করা হয়েছে, Login নয়।

const Login = () => {
  // এখানে আপনার লগইন ফর্ম কম্পোনেন্ট থাকবে
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg border">
        <h2 className="text-3xl font-bold text-center text-gray-800">লগইন</h2>
        <p className="text-center text-gray-600">এডমিন বা সদস্য হিসেবে লগইন করুন</p>
        
        {/* এখানে ইনপুট ফিল্ড ও বাটন ব্যবহার করে লগইন ফর্ম তৈরি হবে */}
        <form className="mt-6 space-y-6">
          <input 
            type="email" 
            placeholder="ইউজারনেম বা ইমেইল" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input 
            type="password" 
            placeholder="পাসওয়ার্ড" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-150"
          >
            লগইন
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; // এই কম্পোনেন্টটি এক্সপোর্ট করা হচ্ছে