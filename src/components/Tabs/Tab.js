import React from 'react';
import TabsStyle from './tabs.module.scss';

export default function Tab({ label, isActive, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`${TabsStyle['tab-normal']} ${isActive ? TabsStyle['tab-active'] : ''}`}
    >
      {label}
    </div>
  );
}
