import React from 'react';

export function setCommaToMoney(x) {
  const number = String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
}

export function parseStatus(status) {
  switch (status) {
    case 'NEW':
      return <p style={{ color: '#d60000' }}>Belum dibayar</p>;
    case 'PAID':
      return <p style={{ color: '#00d604' }}>Belum dibayar</p>;
    case 'PROCESSED':
      return <p style={{ color: 'inherit' }}>Belum dibayar</p>;
    case 'REJECTED':
      return <p style={{ color: '#d60000' }}>Belum dibayar</p>;
    case 'COMPLETED':
      return <p>Belum dibayar</p>;
    default:
      return '';
  }
}
