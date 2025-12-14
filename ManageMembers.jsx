// src/pages/Admin/ManageMembers.jsx
import React from 'react';
import Card from '../../components/ui/Card';

const ManageMembers = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">সদস্য পরিচালনা</h1>
      <Card className="p-6">
        <p className="text-lg text-gray-600">এখানে সদস্যদের তালিকা এবং সম্পাদনার ফর্ম থাকবে।</p>
        <p className="mt-2 text-sm text-indigo-500">TODO: React Query ব্যবহার করে মেম্বার ডেটা ফেচ এবং DataTable এ প্রদর্শন করতে হবে।</p>
      </Card>
    </div>
  );
};

export default ManageMembers;