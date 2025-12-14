// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  let baseStyles = "py-2 px-4 rounded-lg font-medium transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4";

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500/50';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500/50';
      break;
    case 'danger':
      variantStyles = 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/50';
      break;
    // আরও ভেরিয়েন্ট যোগ করা যেতে পারে
    default:
      variantStyles = 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500/50';
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;