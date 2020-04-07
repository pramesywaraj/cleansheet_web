import React from 'react';

import TableStyle from './table.module.scss';

export default function Table({ headers, children }) {
  function renderHeader() {
    return (
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index.toString()}>{header}</th>
          ))}
        </tr>
      </thead>
    );
  }

  return (
    <div className={TableStyle['table-wrapper']}>
      <div className={TableStyle['table-container']}>
        <table>
          {renderHeader()}
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}
