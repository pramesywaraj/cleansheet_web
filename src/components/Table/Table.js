import React from 'react';

import TableStyle from './table.module.scss';

export default function Table() {
  return (
    <div className={TableStyle['table-wrapper']}>
      <div className={TableStyle['table-container']}>
        <table>
          <tr>
            <th>Tanggal Pemesanan</th>
            <th>Kode Pesanan</th>
            <th>Total Harga</th>
            <th>Status Pemesanan</th>
            <th> </th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Lihat detail</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
