import React from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import NavStyle from './nav.module.scss';

import IconButton from '../Buttons/IconButton';

export default function PaginationButton() {
  return (
    <div className={`${NavStyle['pagination-container']}`}>
      <IconButton label={<FaCaretLeft size="1.5em" />} iconColor="#adadad" />
      <IconButton label={<FaCaretRight size="1.5em" />} iconColor="#02AFF3" />
    </div>
  );
}
