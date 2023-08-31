import React from "react";

export const TableAuditoria = ({
  columns,
  rows,
  indexs,
  handleDelete,
  isDelete = false,
  isUpdate = false,
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {indexs.map((column, columnIndex) => (
              <td
                key={columnIndex}
                className="px-6 py-4 whitespace-no-wrap text-center"
              >
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
