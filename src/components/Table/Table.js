import React from 'react';

import TableStyle from './table.module.scss';
import Loading from '../Loading/Loading';

export default function Table({ loading, headers, children }) {
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

  function renderLoading() {
    return (
      <tr>
        <td colSpan={headers.length + 1}>
          <Loading />
        </td>
      </tr>
    );
  }

  return (
    <div className={TableStyle['table-wrapper']}>
      <div className={TableStyle['table-container']}>
        <table>
          {renderHeader()}
          <tbody>{loading ? renderLoading() : children}</tbody>
        </table>
      </div>
    </div>
  );
}
