import React from 'react'
import buttonStyle from './button.module.scss'

import { ReactComponent as WhatsappIcon } from '../../assets/whatsapp.svg'

export default function WhatsappButton() {
    return (
        <button className={`${buttonStyle.whatsappButton}`}>
            <WhatsappIcon className={`${buttonStyle.whatsappIcon}`} />
            Hubungi Kami
        </button>
    )
}
