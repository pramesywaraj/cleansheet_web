import React from 'react';

import CardStyle from './card.module.scss';

export default function CardBase({ children }) {
  return <div className={`${CardStyle.cardBases}`}>{children}</div>;
}
