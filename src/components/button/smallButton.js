import React from 'react';
import buttonStyle from './button.module.scss';

export default function SmallButton({ clickAction, label }) {
    return (
        <button onClick={clickAction} className={buttonStyle.smallButton}>
            {label}
        </button>
    )
}
