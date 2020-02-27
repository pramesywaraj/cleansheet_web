import React, { useState } from 'react';
import CardBase from './cardBase';
import SmallButton from '../button/smallButton';
import TextInput from '../input/TextInput';

import cardStyle from './card.module.scss';

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('login pressed');
  };

  return (
    <CardBase>
      <div className={`${cardStyle['card-layout']}`}>
        <div className={`${cardStyle['card-container-input']}`}>
          <TextInput label="Email" placeholder="" value={email} />
        </div>
        <div className={`${cardStyle.buyButton}`}>
          <SmallButton label="Beli" clickAction={login} />
        </div>
      </div>
    </CardBase>
  );
}
