// src/pages/Admin/Dashboard.jsx
import React from 'react';
import Card from '../../components/ui/Card'; // Card কম্পোনেন্ট আপনাকে বানিয়ে নিতে হবে

// এই ডেটা গুলো API থেকে আসবে, এখন ডামি হিসেবে ব্যবহার করা হচ্ছে
const stats = [
  { name: 'মোট বই', value: '452', icon: '📚' },
  { name: 'সদস্য সংখ্যা', value: '240', icon: '👤' },
  { name: 'বর্তমানে ইস্যুড', value: '89', icon: '📤' },
  { name: 'বকেয়া জরিমানা', value: '৳ 5,200', icon: '💸' },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">এডমিন ড্যাশবোর্ড</h1>
      
      {/* পরিসংখ্যান কার্ড */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 bg-white shadow-lg border-l-4 border-indigo-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-3xl font-semibold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <span className="text-4xl text-indigo-500">{stat.icon}</span>
            </div>
          </Card>
        ))}
      </div>
      
      {/* অন্যান্য সেকশন */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">সাম্প্রতিক ইস্যু</h2>
          {/* এখানে DataTable কম্পোনেন্ট ব্যবহার হবে */}
          <Card className="bg-white p-6 shadow-lg h-96">সাম্প্রতিক ইস্যু তালিকা</Card>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">শীর্ষ জনপ্রিয় বই</h2>
          <Card className="bg-white p-6 shadow-lg h-96">জনপ্রিয় বইয়ের তালিকা</Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;