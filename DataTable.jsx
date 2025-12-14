// src/components/DataTable.jsx
import React from 'react';

const DataTable = ({ data, columns }) => {
  if (!data || data.length === 0) {
    return <p className="text-center py-4 text-gray-500">কোন ডেটা পাওয়া যায়নি।</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        {/* টেবিল হেডার */}
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        {/* টেবিল বডি */}
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-indigo-50 transition duration-150">
              {columns.map((column) => (
                <td key={column.accessor} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {/* যদি কাস্টম রেন্ডার ফাংশন থাকে */}
                  {column.Cell ? column.Cell({ row, column }) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;