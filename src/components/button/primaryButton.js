import React from 'react';

import buttonStyle from './button.module.scss';

export default function PrimaryButton({ clickAction, label }) {
    return (
        <button onClick={clickAction} className={buttonStyle.primaryButton}>
            {label}
        </button>
    )
}
