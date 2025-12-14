// src/components/ui/InputField.jsx
import React from 'react';

const InputField = ({ label, id, type = 'text', className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm ${className}`}
        {...props}
      />
    </div>
  );
};

export default InputField;