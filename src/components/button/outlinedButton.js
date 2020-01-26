import React from 'react';

import buttonStyle from './button.module.scss';

export default function OutlinedButton({ clickAction, label }) {
    return (
        <button onClick={clickAction} className={buttonStyle.outlinedButton}>
            {label}
        </button>
    )
}
