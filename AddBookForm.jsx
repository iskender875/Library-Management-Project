// src/pages/Admin/AddBookForm.jsx (আগের কোডের আপডেট)
// ... অন্যান্য ইম্পোর্ট ...
import React, { useState } from 'react'; // useState ইম্পোর্ট করুন
// ... useForm, useMutation ইত্যাদি ইম্পোর্ট ...

const AddBookForm = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null); // ইমেজ প্রিভিউ এর জন্য স্টেট

  const {
    register,
    handleSubmit,
    setValue, // ছবির ডেটা সেট করার জন্য
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    // ... defaultValues ...
  });
  
  // ছবির ফাইল ওয়াচ করুন
  const imageFile = watch("coverImage");
  
  // ... mutation setup ...

  const onSubmit = (data) => {
    // ফর্ম ডেটা পাঠানোর আগে (backend এর জন্য):
    
    const formData = new FormData();
    // অন্যান্য ফিল্ড যোগ করুন
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('totalCopies', parseInt(data.totalCopies, 10));
    // ... অন্যান্য ফিল্ড

    // ছবি ফাইল যোগ করুন (যদি ফাইল নির্বাচিত হয়)
    if (data.coverImage && data.coverImage[0]) {
        formData.append('coverImage', data.coverImage[0]);
    }
    
    // এখন addBook ফাংশনকে formData পাঠাতে হবে, JSON নয়
    addMutation.mutate(formData); 
    // *দ্রষ্টব্য: API ফাংশনকে FormData হ্যান্ডেল করার জন্য পরিবর্তন করতে হবে*
  };

  // ... return এর ভিতরে

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white rounded-lg shadow-lg">
      {/* ... অন্যান্য ইনপুট ফিল্ড (title, author, isbn) ... */}

      {/* ৬. বইয়ের কভার ছবি আপলোড */}
      <div className="pt-2">
        <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">
          বইয়ের কভার ছবি
        </label>
        <InputField
          id="coverImage"
          type="file"
          // 'required' ভ্যালিডেশন যোগ করা যেতে পারে
          {...register('coverImage', { required: 'বইয়ের কভার আবশ্যক' })}
          accept="image/*" // শুধুমাত্র ইমেজ ফাইল গ্রহণ করবে
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
        {errors.coverImage && <p className="text-red-500 text-sm">{errors.coverImage.message}</p>}
        
        {/* ছবির প্রিভিউ */}
        {imageFile && imageFile.length > 0 && (
            <div className="mt-4 w-32 h-40 overflow-hidden rounded-lg shadow-md border">
                <img 
                    src={URL.createObjectURL(imageFile[0])} 
                    alt="Image Preview" 
                    className="w-full h-full object-cover"
                />
            </div>
        )}
      </div>

      {/* ... সাবমিট বাটন ... */}
    </form>
  );
};

export default AddBookForm;