import React from 'react';
import TabsStyle from './tabs.module.scss';

export default function Tab({ label, selected, selectedId, onSelect }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      id={`${selectedId}-content`}
      aria-controls={`${selectedId}-content-container`}
      onClick={onSelect}
      className={`${TabsStyle['tab-normal']} ${selected ? TabsStyle['tab-active'] : ''}`}
    >
      {label}
    </button>
  );
}
