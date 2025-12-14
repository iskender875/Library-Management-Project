// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">স্বাগতম লাইব্রেরি ম্যানেজমেন্ট সিস্টেমে</h1>
      <p className="text-xl text-gray-600 mb-8">বই খুঁজুন, ইস্যু করুন এবং পরিচালনা করুন।</p>
      <div className="space-x-4">
        <a href="/catalog" className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 shadow-md">
          বইয়ের ক্যাটালগ দেখুন
        </a>
        <a href="/login" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition duration-150">
          এডমিন লগইন
        </a>
      </div>
    </div>
  );
};

export default Home;