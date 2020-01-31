import React from 'react'

import cardStyle from './card.module.scss'

export default function CardBase({ children }) {
    return (
        <div className={`${cardStyle.cardBases}`}>
            {children}
        </div>
    )
}
