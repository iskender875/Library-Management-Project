// src/pages/Public/BookCatalog.jsx

import React from 'react';
// ধরে নিচ্ছি আপনি BookCard বা DataTable ব্যবহার করবেন
import Card from '../../components/ui/Card'; 

const BookCatalog = () => {
  // TODO: React Query ব্যবহার করে getBooks ফাংশন থেকে ডেটা ফেচ করতে হবে।

  // ডামি বইয়ের তালিকা
  const dummyBooks = [
    { id: 1, title: "পদ্মা নদীর মাঝি", author: "মানিক বন্দ্যোপাধ্যায়" },
    { id: 2, title: "সায়েন্স ফিকশন সমগ্র", author: "মুহম্মদ জাফর ইকবাল" },
    { id: 3, title: "পথের পাঁচালী", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">📚 বইয়ের ক্যাটালগ</h1>
      <p className="mb-8 text-gray-600">আমাদের লাইব্রেরিতে বর্তমানে উপলব্ধ সমস্ত বই দেখুন।</p>
      
      {/* অনুসন্ধান ও ফিল্টার বার */}
      <div className="mb-8">
        <input 
          type="text" 
          placeholder="বইয়ের নাম বা লেখক দিয়ে খুঁজুন..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
        />
      </div>

      {/* বইয়ের তালিকা গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyBooks.map((book) => (
          <Card key={book.id} className="p-4 hover:shadow-xl transition duration-300 border border-gray-100">
            <h3 className="text-lg font-semibold text-indigo-600">{book.title}</h3>
            <p className="text-sm text-gray-500 mt-1">লেখক: {book.author}</p>
            <button className="mt-4 text-sm font-medium text-indigo-500 hover:text-indigo-700">
                বিস্তারিত দেখুন
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};





export default BookCatalog;