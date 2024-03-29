import React from 'react';

import CardStyle from 'components/Cards/card.module.scss';

export default function CardBase({ children }) {
  return <div className={`${CardStyle.cardBases}`}>{children}</div>;
}
